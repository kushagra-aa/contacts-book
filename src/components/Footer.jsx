const Footer = () => {
  return (
    <footer className="pt-1 w-screen gap-3 align-middle justify-center capitalize flex text-yellow-600 bg-gray-800">
      <p>&copy; contacts book</p>
      <p className="lowercase">
        by{" "}
        <a
          href="https://kushagra-aa.github.io/portfolio/#about"
          className="underline capitalize"
          target="_blank"
          rel="noreferrer"
        >
          Kushagra Agnihotri
        </a>
      </p>
    </footer>
  );
};

export default Footer;
