import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">DUMMYAPI.IO</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Navbar;
