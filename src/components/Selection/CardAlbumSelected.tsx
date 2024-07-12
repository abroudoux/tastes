import { X } from "lucide-react";

import type { Album } from "@/utils/types";

const CardAlbumSelectd = (props: Album) => {
  return (
    <div className="flex-row-center-between w-full border border-border p-2 hover:cursor-pointer rounded group">
      <div className="flex-row-start-start gap-2">
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
      <X size={24} className="invisible group-hover:visible text-muted-foreground" />
    </div>
  );
};

export default CardAlbumSelectd;
