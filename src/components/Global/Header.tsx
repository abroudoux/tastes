import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-auto py-8 flex-row-center-start">
      <Link to={"/"} className="text-2xl font-semibold">
        tastes
      </Link>
    </header>
  );
}
