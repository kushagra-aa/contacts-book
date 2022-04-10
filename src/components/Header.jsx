const Header = () => {
  return (
    <nav className="w-screen flex justify-center md:justify-start gap-4 md:gap-10 text-sm md:text-lg top-0 capitalize border-2 shadow-md sticky bg-white p-2 md:pl-10 whitespace-nowrap text-yellow-400">
      <a
        href="/"
        className="p-2 hover:border-b-2 border-yellow-400 transitional"
      >
        home
      </a>
      <a
        href="/"
        className="p-2 hover:border-b-2 border-yellow-400 transitional"
      >
        about
      </a>
      <a
        href="/"
        className="p-2 hover:border-b-2 border-yellow-400 transitional"
      >
        my contacts
      </a>
      <a
        href="/"
        className="p-2 border-2 rounded-sm hover:bg-yellow-400 hover:text-white transitional border-yellow-400"
      >
        add new contact
      </a>
    </nav>
  );
};

export default Header;
