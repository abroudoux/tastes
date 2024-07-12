import useStore from "@/lib/store";

import ItemCarouselGallery from "@/components/Gallery/ItemCarouselGallery";

export default function CarouselGallery() {
  const { albumsSelected } = useStore();

  if (!albumsSelected.length) {
    return <h1 className="text-3xl font-bold">No albums selected</h1>;
  }

  return (
    <section className="w-full h-full flex-col-center-center">
      <ol className="w-full h-auto flex-row-center-start gap-2 overflow-scroll">
        {albumsSelected.map((album) => (
          <ItemCarouselGallery key={album.id} {...album} />
        ))}
      </ol>
    </section>
  );
}
