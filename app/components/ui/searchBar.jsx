import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="flex items-center max-w-md">
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Buscar
        </button>
      </div>
      <div className="flex items-center mx-4">
        <FontAwesomeIcon icon={faGlobe} width={20} />
        <h1 className="mx-1">Mexico</h1>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} width={25} />
      </div>
    </div>
  );
};

export default SearchBar;
