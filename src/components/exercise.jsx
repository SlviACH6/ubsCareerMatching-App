import { Link } from "react-router-dom";
import helloworld from "../assets/helloworld.png";

export default function exercise() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] p-4 bg-white rounded-lg shadow-lg">
        <div className="text-center m-10">
          <h1 className="font-bold text-2xl">The Exercise</h1>
          <h2>Write your first Hello World</h2>
        </div>
        <div className="flex flex-col items-center border rounded w-auto mt-3">
          <div className="font-mono p-4">
            <h3 className="">TEST THE JOB:</h3>
            <h3 className=" text-xs mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h3>
            <div className="flex flex-col items-center">
              <img
                src={helloworld}
                alt="code snipet"
                className=" border rounded w-64"
              />
              <div className="w-64 h-20 mt-4 border-2 border-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/results">
            <button className="bg-red-200 hover:bg-red-600 text-white font-bold  w-56 p-3 rounded mt-11">
              See the outcome
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
