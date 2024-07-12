import { useState } from "react";
import { Canvas } from "@react-three/fiber";

import useStore from "@/lib/store";

import ItemCarouselGallery from "@/components/Gallery/ItemCarouselGallery";
import Scene from "@/components/Gallery/Scene";

export default function CarouselGallery() {
  const { albumsSelected } = useStore();

  const [currentAlbumData, setCurrentAlbumData] = useState(null);
  const [hoveredAlbumData, setHoveredAlbumData] = useState(null);

  if (!albumsSelected.length) {
    return <h1 className="text-3xl font-bold">No albums selected</h1>;
  }

  return (
    <section className="w-full h-full flex-col-center-center">
      {/* <ol className="w-full h-auto flex-row-center-start gap-2 overflow-scroll">
        {albumsSelected.map((album) => (
          <ItemCarouselGallery key={album.id} {...album} />
        ))}
      </ol> */}
      <Canvas>
        <Scene
          setCurrentAlbumData={setCurrentAlbumData}
          setHoveredAlbumData={setHoveredAlbumData}
          currentAlbumData={currentAlbumData}
        />
      </Canvas>
    </section>
  );
}
