import results from "../assets/results.png";
import UBS_Logo from "../assets/UBS_Logo.png";
import { Link } from "react-router-dom";

export default function exercise() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] p-4 bg-white rounded-lg shadow-lg">
        <div className="text-center m-10">
          <h1 className="font-bold text-2xl">Congratulations!</h1>
          <h2>Here is a personalized suggestion for you </h2>
        </div>
        <div className="flex flex-col items-center border rounded w-auto mt-3">
          <div className="p-4">
            <h3 className="">Your results:</h3>
            <h3 className=" text-xs mb-3">
              We've evaluated your skills, personality, and performance on the
              exercises. Based on these, here’s your best match! We’re also
              recommending two other options that suit you well.
            </h3>

            <div className="flex flex-col items-center">
              <img src={results} alt="results of the test" />
            </div>
          </div>
        </div>
        <Link to="https://www.ubs.com/global/en/careers/apprenticeship/grow.html">
          <div className="flex flex-col items-center">
            <img src={UBS_Logo} alt="ubslogo" className="w-28 mt-6" />
          </div>
        </Link>
      </div>
    </div>
  );
}
