import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { X } from "lucide-react";

import useStore from "@/lib/store";
import type { Album } from "@/utils/types";

import Scene from "@/components/Gallery/Scene";
import AlbumDetails from "@/components/Gallery/AlbumDetails";
import HoveredAlbumInfos from "@/components/Gallery/HoveredAlbumInfos";

export default function CarouselGallery() {
  const { albumsSelected } = useStore();

  const [albumData, setAlbumData] = useState<Album | null>(null);
  const [hoveredAlbumData, setHoveredAlbumData] = useState<Album | null>(null);
  const [displayOverlay, setDisplayOverlay] = useState(false);

  if (!albumsSelected.length) {
    return <h1 className="text-3xl font-bold">No albums selected</h1>;
  }

  return (
    <section className="w-full h-full flex-col-center-center">
      <div className="fixed top-0 right-0 w-full h-full">
        <Canvas>
          <Scene
            setAlbumData={setAlbumData}
            setHoveredAlbumData={setHoveredAlbumData}
            albumData={albumData}
          />
        </Canvas>
      </div>

      {albumData && (
        <button
          onClick={() => {
            setDisplayOverlay(true);
            setTimeout(() => {
              setAlbumData(null);
            }, 300);
            setDisplayOverlay(false);
            window.scrollTo(0, 0);
          }}
          className="absolute left-20 top-1/2 p-2 rounded-full bg-neutral-900 hover:scale-105 transition-transform duration-200">
          <X size={40} className="text-white" />
        </button>
      )}

      <HoveredAlbumInfos
        album={hoveredAlbumData ? hoveredAlbumData : null}
        isHidden={hoveredAlbumData && !albumData ? false : true}
      />

      {albumData && <AlbumDetails album={albumData} />}
    </section>
  );
}
