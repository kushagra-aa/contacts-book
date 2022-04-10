import { Link } from "react-router-dom";
import Logo from "./../assets/logo.png";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <main className="flex flex-col gap-8 p-10 md:p-5 lg:p-3">
        <img
          className="mx-auto w-2/12 border-2 rounded-lg border-yellow-400"
          src={Logo}
          alt="me"
        />
        <p className="text-2xl text-white">
          <Link to={"/"}>
            <span className="cursor-pointer text-yellow-200">
              {" "}
              Contact book{" "}
            </span>
          </Link>
          Basic Contact App Clone using React-Redux
        </p>
        <p className="self-center text-lg capitalize text-gray-200 whitespace-nowrap">
          built with 🤍
        </p>
        <div className="flex flex-col gap-8">
          <p className="text-xl capitalize text-gray-200">made by</p>
          <div className="flex flex-col items-center gap-8">
            <a
              target="_blank"
              href="https://kushagra-aa.github.io/portfolio/"
              rel="noreferrer"
            >
              <img
                className="hover-up transition-up w-96 rounded-full border-2 border-yellow-300 shadow-2xl"
                src="https://pbs.twimg.com/profile_images/1391264894192738307/YLfn-2Xk_400x400.jpg"
                alt="me"
              />
            </a>
            <p className="text-6xl capitalize tracking-widest text-yellow-400">
              Kushagra Agnihotri
            </p>
            <p className="text-2xl text-gray-500 font-light">
              Creating memorable Websites and Apps.
            </p>
            <div className="lg:text-1xl mb-10 flex w-2/3 flex-col justify-between gap-4 text-lg capitalize md:flex-row md:text-xl">
              <a
                href="https://kushagra-aa.github.io/portfolio/#about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-down rounded bg-yellow-400 p-2 text-center text-gray-900 shadow-xl md:w-1/4"
              >
                more about me
              </a>
              <a
                href="https://kushagra-aa.github.io/portfolio/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-up rounded bg-gray-700 p-2 text-center text-yellow-400 shadow-xl md:w-1/4"
              >
                contact me
              </a>
              <a
                href="https://kushagra-aa.github.io/portfolio/#projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-down rounded bg-yellow-400 p-2 text-center text-gray-900 shadow-xl md:w-1/4"
              >
                more by me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
