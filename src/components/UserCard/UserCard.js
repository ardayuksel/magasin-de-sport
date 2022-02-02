import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="userCard">
      <Link to={{ pathname: `/user/${user.id}` }}>
        <img src={user.picture} alt="user" />
      </Link>
      <p>{user.id}</p>
      <h1>
        {user.title} {user.firstName} {user.lastName}
      </h1>
      <p>{user.picture}</p>
      <hr />
      <Link to={{ pathname: `/user/${user.id}` }}>Go to Full Profile</Link>
      <a href={user.picture}>Go to Picture Link</a>
    </div>
  );
}

export default UserCard;
