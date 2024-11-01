export default function profile() {
  return (
    <div>
      <h1>choose your avatar</h1>
      <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="avatar1" />
      <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="avatar2" />
      <form>
        <h2>Name</h2>
        <input type="text" placeholder="choose a name for your avatar" />
        <h2></h2>
        <input type="text" />
      </form>
    </div>
  );
}
