import { Link } from "react-router-dom";
import UBS_Logo from "../assets/UBS_Logo.png";

export default function main() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] text-center p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center m-6">
          <img className="w-40" src={UBS_Logo} alt="logo" />
          <h1 className="text-lm mt-6 font-bold mb-2">
            Explore, discover and choose your UBS career path
          </h1>
        </div>
        <div>
          <video src="" className="w-full rounded" controls></video>
        </div>
        <Link to="/profile">
          <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-12">
            <strong> Let´s Start!</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}
