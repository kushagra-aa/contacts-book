import { Link } from "react-router-dom";
import HomeIllustration from "./../assets/home-illustration.svg";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 p-8 relative">
      <h1 className="text-lg lg:text-8xl text-yellow-400 font-extrabold uppercase w-1/4 mt-16">
        contact book
      </h1>
      <p className="text-lg text-base text-yellow-50 w-1/2 lg:w-1/6 font-light">
        Store all your conatcts at one place
      </p>
      <div className="flex flex-col gap-2 mt-5">
        <Link
          to="/add"
          className="hover:bg-yellow-500 transitional  p-2 capitalize bg-yellow-400 w-max rounded-sm text-gray-900 text-xl shadow-sm"
        >
          add new conatct
        </Link>
        <Link
          to="/contacts"
          className="hover:border-yellow-200 hover:text-yellow-200 transitional  p-2 border-2 border-yellow-400 text-yellow-400 w-max rounded-sm capitalize text-xl shadow-sm"
        >
          view all conatcts
        </Link>
      </div>
      <img
        src={HomeIllustration}
        className="ml-6 md:absolute top-0 right-4 w-9/12 animate-float"
        alt="illustration"
      />
    </div>
  );
};

export default Home;
