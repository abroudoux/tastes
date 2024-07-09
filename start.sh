#!/bin/sh

pnpm run dev &

server_pid=$!

update_token() {
    ./request-access-token.sh
}

while kill -0 "$server_pid" >/dev/null 2>&1; do
    update_token
    sleep 3600
done
