import { createAvatar } from "@dicebear/core";
import { thumbs } from "@dicebear/collection";

export default function generateAvatarPP(username: string) {
  const avatar = createAvatar(thumbs, {
    seed: username
  });

  const avatarImg = avatar.toDataUriSync();

  return avatarImg;
}
