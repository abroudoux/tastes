import Header from "@/components/Global/Header";
import SectionSearch from "@/components/Search/SectionSearch";
import SectionAlbumsSelected from "@/components/Selection/SectionAlbumsSelected";
import BtnCreateGallery from "@/components/Gallery/BtnCreateGallery";

export default function Home() {
  return (
    <main>
      <SectionSearch />
      <SectionAlbumsSelected />
      <BtnCreateGallery />
    </main>
  );
}
