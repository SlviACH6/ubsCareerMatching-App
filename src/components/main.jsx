import { Link } from "react-router-dom";

export default function landingPage() {
  return (
    <div>
      <h1>title of the challenge</h1>
      <h1>slogan</h1>
      <h2>description and porpusse</h2>
      <Link to="/profile">
        <button>
          <strong> let s go!</strong>link to profile
        </button>
      </Link>
    </div>
  );
}
