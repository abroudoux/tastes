import type { Album } from "@/utils/types";

const ItemCarouselGallery = (props: Album) => {
  return (
    <li className="w-64 h-64 flex-shrink-0 rounded overflow-hidden">
      <img
        key={props.id}
        src={props.images[0].url}
        alt={`${props.name} by ${props.artists[0].name}`}
        className="w-full h-full object-cover"
      />
    </li>
  );
};

export default ItemCarouselGallery;
