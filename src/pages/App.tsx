import Header from "@/components/Global/Header";
import SectionSearch from "@/components/Search/SectionSearch";

export default function App() {
  return (
    <div className="w-screen h-screen flex-col-center-center p-4 bg-black">
      <div className="w-full h-full p-8 rounded-xl bg-white">
        {/* <Header /> */}
        <main>
          <SectionSearch />
        </main>
      </div>
    </div>
  );
}
