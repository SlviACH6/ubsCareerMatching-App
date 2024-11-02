import { Link } from "react-router-dom";

export default function exercise() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-light">
      <div className="w-[390px] h-[645px] p-4 bg-white rounded-lg shadow-lg">
        <div className="text-center m-10">
          <h2>Working as a</h2>
          <h1 className="font-bold text-2xl">Application Developer</h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-60 h-auto rounded-lg"
            src="https://media.istockphoto.com/id/1278976555/photo/happy-high-school-girl-using-laptop-in-classroom.jpg?s=612x612&w=0&k=20&c=d5XDR674Adb-yzGTtsqw07OgILDAEsHzgNIFTt14SWk="
            alt="Happy student"
          />
          <p className="text-xs text-center mt-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur."
          </p>
        </div>
        <Link to="">
          <div className="flex flex-col items-center border rounded w-auto mt-6">
            <div className="font-mono p-4">
              <h3 className="">TEST THE JOB:</h3>
              <h3 className=" text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
