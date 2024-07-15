import useStore from "@/lib/store";
import { Album } from "@/utils/types";

import CardAlbumSelected from "@/components/Selection/CardAlbumSelected";

export default function SectionAlbumsSelected() {
  const { albumsSelected, removeAlbumSelected } = useStore();

  const handleRemoveAlbum = (album: Album) => {
    removeAlbumSelected(album);
  };

  if (albumsSelected.length === 0) return null;

  return (
    <section className="flex-col-start-start gap-4 w-full my-5">
      <h2 className="text-xl">Selected albums</h2>
      <div className="grid grid-cols-2 gap-2 w-full">
        {albumsSelected.map((album) => (
          <CardAlbumSelected key={album.id} album={album} handleRemoveAlbum={handleRemoveAlbum} />
        ))}
      </div>
    </section>
  );
}
