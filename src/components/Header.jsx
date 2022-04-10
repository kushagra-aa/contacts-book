import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-screen flex justify-center md:justify-start gap-4 md:gap-10 text-sm md:text-lg top-0 capitalize shadow-md sticky bg-gray-800 p-2 md:pl-10 whitespace-nowrap text-yellow-400">
      <Link to="/" className="p-2 hover:border-b-2 border-yellow-400">
        home
      </Link>
      <Link to="/about" className="p-2 hover:border-b-2 border-yellow-400">
        about
      </Link>
      <Link to="/contacts" className="p-2 hover:border-b-2 border-yellow-400">
        my contacts
      </Link>
      <Link
        to="/add"
        className="p-2 border-2 rounded-sm hover:bg-yellow-400 hover:text-white transitional border-yellow-400"
      >
        add new contact
      </Link>
    </nav>
  );
};

export default Header;
