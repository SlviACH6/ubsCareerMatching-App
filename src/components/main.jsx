import { Link } from "react-router-dom";
import UBS_Logo from "../assets/UBS_Logo.png";

export default function main() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] text-center p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center m-6">
          <img className="w-40" src={UBS_Logo} alt="logo" />
          <h1 className="text-lm mt-6 font-bold mb-2">
            Welcome to the UBS career pathfinder
          </h1>
        </div>
        <div>
          <video src="" className="w-full rounded" controls></video>
        </div>
        <div className="mt-10">
          <h1 className="text-lm mt-6 mb-6">
            Explore, discover and choose your UBS career path
          </h1>

          <Link to="/profileLevel">
            <button className="bg-red-200 hover:bg-red-600 text-white font-bold  w-56 p-3 rounded">
              <strong> Let´s Start!</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
