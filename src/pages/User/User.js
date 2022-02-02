import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUserDetail } from "../../redux/actions";
import GoogleMap from "../../components/GoogleMap";

function User(props) {
  const param = useParams();

  useEffect(() => {
    props.getUserDetail(param.id);
  }, [props.user.length]);

  return (
    <div className="user">
      <div className="user__image-container">
        <img src={props.user.picture} alt="alt" />
      </div>
      <div className="user__information-container">
        <p className="user__id">{props.user.id}</p>
        <h1 className="user__fullName">
          {props.user.title} {props.user.firstName} {props.user.lastName}
        </h1>
        <h2>
          Gender: <span>{props.user.gender}</span>
        </h2>
        <h2>
          Date of Birth:{" "}
          <span>
            {props.user.dateOfBirth &&
              props.user.dateOfBirth.slice(0, -5).replace("T", " ")}
          </span>
        </h2>
        <h2>
          Register Date:{" "}
          <span>
            {props.user.registerDate &&
              props.user.registerDate.slice(0, -5).replace("T", " ")}
          </span>
        </h2>
        <h2>
          Email: <span>{props.user.email}</span>
        </h2>
        <h2>
          Phone: <span>{props.user.phone}</span>
        </h2>
      </div>
      <div className="user__map-container">
        <h1>Address</h1>
        <GoogleMap />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUserDetail })(User);
