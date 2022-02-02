import { useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/index";

function Users(props) {
  useEffect(() => {
    props.getUsers();
  }, [props.users.length]);

  return (
    <div className="users">
      {props.users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
