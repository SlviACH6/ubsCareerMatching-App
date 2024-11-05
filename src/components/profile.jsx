import { Link } from "react-router-dom";
import femaleBgImage from "../assets/femaleBgImage.png";
import maleBgImage from "../assets/maleBgImage.png";

export default function profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] p-4 bg-white rounded-lg shadow-lg">
        <div className=" text-center m-10">
          <h2>Tell us more about you</h2>
          <h1 className="font-bold text-2xl">What´s your Gender</h1>
        </div>
        <div>
          <Link to="/itDeveloper">
            <div
              className="flex flex-col items-start border rounded-lg text-white h-32 w-full bg-cover bg-center mb-10"
              style={{ backgroundImage: `url(${femaleBgImage})` }}
            >
              <div className="m-4">
                <h1 className="mb-6">Female</h1>
              </div>
            </div>
          </Link>
          <Link to="/itDeveloper">
            <div
              className="flex flex-col items-start border rounded-lg text-white h-32 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${maleBgImage})` }}
            >
              <div className="m-4">
                <h1 className="mb-6">Male</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
