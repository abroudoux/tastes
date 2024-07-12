import { Album } from "@/utils/types";

const CardSuggestionAlbum = (props: Album) => {
  return (
    <li className="w-full h-auto flex-row-center-start gap-2 hover:bg-muted hover:cursor-pointer">
      <img
        src={props.images[0].url}
        alt={`${props.name} by ${props.artists}`}
        className="w-12 h-12 rounded"
      />
      <div className="h-full flex-col-start-center">
        <h2 className="text-lg">{props.name}</h2>
        <p className="text-muted-foreground text-sm">
          {props.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
    </li>
  );
};

export default CardSuggestionAlbum;
