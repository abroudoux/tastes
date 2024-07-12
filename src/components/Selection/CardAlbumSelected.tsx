import type { Album } from "@/utils/types";

const CardAlbumSelectd = (props: Album) => {
  return (
    <div className="flex-row-start-start w-full gap-2 border border-border p-2 hover:cursor-pointer rounded">
      <img
        src={props.images[0].url}
        alt={`${props.name} by ${props.artists.map((artist) => artist.name).join(", ")}`}
        className="w-12 h-12 rounded"
      />
      <div className="flex-col-start-start">
        <h2 className="text-md">{props.name}</h2>
        <p className="text-muted-foreground text-sm">
          {props.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default CardAlbumSelectd;
