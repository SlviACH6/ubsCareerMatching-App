import { Link } from "react-router-dom";

export default function landingPage() {
  return (
    <div>
      <h1>USB Career Pathfinder</h1>
      <h1>Explore, discover and choose your UBS carrer path</h1>
      <h2>description and porpusse</h2>
      <Link to="/profile">
        <button>
          <strong> let s go!</strong>link to profile
        </button>
      </Link>
    </div>
  );
}
