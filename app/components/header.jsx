import Image from "next/image";
import SearchBar from "./ui/searchBar";

const Header = () => {
  return (
    <header className="p-8 bg-[#000028]">
      <div className="flex justify-between p-8">
        <div>
          <Image src="logo/logotn.svg" width={220} height={80} />
        </div>
        {/* Components for Icons and search bar */}
        <SearchBar />
      </div>

      <div>
        <nav>
          <ul className="list-none flex gap-4">
            <li>
              <a href="/" className="text-white hover:text-blue-300">
                Productos y soluciones
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-blue-300">
                Soluciones por mercado
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-blue-300">
                Compania
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
