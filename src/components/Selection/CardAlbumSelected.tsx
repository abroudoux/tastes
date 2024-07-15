import { X } from "lucide-react";

import { CardAlbumSelectedInterface } from "@/utils/interfaces";

import { Button } from "@/components/ui/button";

const CardAlbumSelectd = (props: CardAlbumSelectedInterface) => {
  return (
    <div className="flex-row-center-between w-full border border-border p-2 hover:cursor-pointer rounded group">
      <div className="flex-row-start-start gap-2">
        <img
          src={props.album.images[0].url}
          alt={`${props.album.name} by ${props.album.artists.map((artist) => artist.name).join(", ")}`}
          className="w-12 h-12 rounded"
        />
        <div className="flex-col-start-start">
          <h2 className="text-md">{props.album.name}</h2>
          <p className="text-muted-foreground text-sm">
            {props.album.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>
      <Button
        size={"icon"}
        variant={"outline"}
        className="invisible group-hover:visible"
        onClick={() => props.handleRemoveAlbum(props.album)}>
        <X size={24} className="text-muted-foreground" />
      </Button>
    </div>
  );
};

export default CardAlbumSelectd;
