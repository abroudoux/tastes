import { Link } from "react-router-dom";

import useStore from "@/lib/store";

import { Button } from "@/components/ui/button";

export default function BtnCreateGallery() {
  const { albumsSelected } = useStore();

  return (
    <div className="w-full flex-col-start-start">
      <Button disabled={albumsSelected.length < 5 ? true : false}>
        <Link to={"/gallery"}>Create gallery</Link>
      </Button>
    </div>
  );
}
