import { Link } from "react-router-dom";

import useStore from "@/lib/store";

import { Button } from "@/components/ui/button";

export default function BtnCreateGallery() {
  const { albumsSelected } = useStore();
  const hasEnoughAlbums = albumsSelected.length < 10 ? true : false;

  return (
    <div className="w-full flex-col-start-start my-5">
      {hasEnoughAlbums && <p className="text-red-500 text-sm">Select at least 10 albums</p>}
      <Button disabled={hasEnoughAlbums ? true : false}>
        <Link to={"/gallery"}>Create gallery</Link>
      </Button>
    </div>
  );
}
