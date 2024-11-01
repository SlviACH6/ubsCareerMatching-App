import { Link } from "react-router-dom";

export default function profile() {
  return (
    <div>
      <h1>choose your avatar</h1>
      <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="avatar1" />
      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="avatar2" />
      <form>
        <h2>Name</h2>
        <input type="text" placeholder="choose a name for your avatar" />
        <h2>student A</h2>
        <input type="radio" />
        <h2>student B</h2>
        <input type="radio" />
        <Link to="/map">
          <button>
            <strong> let s go!</strong>link to ubs game
          </button>
        </Link>
      </form>
    </div>
  );
}
