import { Link } from "react-router-dom";

export default function profile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] p-4 bg-white rounded-lg shadow-lg">
        <div className=" text-center m-10">
          <h2>Tell us more about you</h2>
          <h1 className="font-bold text-2xl">What is your level</h1>
        </div>
        <div className="">
          <Link to="/profile">
            <div className="flex flex-col items-start border rounded-lg text-white h-32 w-full bg-red-600 mb-10">
              <div className="m-4">
                <h1 className="mb-6">Oberstufe</h1>
                <h3 className="text-xs">You are between </h3>
                <h2>13 and 15 years old</h2>
              </div>
            </div>
          </Link>
          <Link to="/profile">
            <div className="flex flex-col items-start border rounded-lg text-white h-32 w-full bg-red-600">
              <div className="m-4">
                <h1 className="mb-6">Matura</h1>
                <h3 className="text-xs">You are between </h3>
                <h2>15 and 18 years old</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
