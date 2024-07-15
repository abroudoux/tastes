import { HoveredAlbumInfosInterface } from "@/utils/interfaces";

const HoveredAlbumInfos = (props: HoveredAlbumInfosInterface) => {
  if (!props.album) {
    return null;
  }

  const artists = props.album.artists.map((artist) => artist.name).join(", ");

  return (
    <div
      className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none transition-opacity duration-500"
      style={props.isHidden ? { opacity: 0 } : {}}>
      <h3 className="text-3xl text-neutral-900">{props.album.name}</h3>
      <h3 className="text-xl font-light text-neutral-500">{artists}</h3>
    </div>
  );
};

export default HoveredAlbumInfos;
