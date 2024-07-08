import Header from "@/components/Global/Header";
import SectionSearch from "@/components/Search/SectionSearch";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-8">
        <SectionSearch />
      </main>
    </>
  );
}
