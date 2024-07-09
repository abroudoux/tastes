#!/bin/sh

env_file=../.env

extract_value() {
    local key="$1"
    grep "^$key=" "$env_file" | sed -E "s/^$key=//"
}

client_id=$(extract_value "ENV_SPOTIFY_CLIENT_ID")
client_secret=$(extract_value "ENV_SPOTIFY_CLIENT_SECRET")
old_access_token=$(extract_value "ENV_SPOTIFY_ACCESS_TOKEN")

new_access_token=`curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}" -s | jq -r .access_token`

gsed -i "s/${old_access_token}/${new_access_token}/g" $env_file