import { Link } from "react-router-dom";

import useStore from "@/lib/store";

import { Button } from "@/components/ui/button";

export default function BtnCreateGallery() {
  const { albumsSelected } = useStore();
  const hasEnoughAlbums = albumsSelected.length < 10 ? true : false;

  return (
    <div className="w-full flex-col-start-start gap-2 my-5">
      <Button disabled={hasEnoughAlbums ? true : false}>
        <Link to={"/gallery"}>Create gallery</Link>
      </Button>
      {hasEnoughAlbums && <p className="text-sm">Select at least 10 albums</p>}
    </div>
  );
}
