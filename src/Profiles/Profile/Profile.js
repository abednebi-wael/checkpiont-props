import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(` Hello i am  ${props.fullName} `);
  return (
    <>
      <img src={props.src} alt="" />
      {props.children}
      <h2>{props.fullName}</h2>
      <h5>I am a {props.profession}</h5>
      <p> {props.bio}</p>
      {/* <button onClick={() => props.handleName(`Hello i am  ${props.fullName} `)}>
        Click Me
      </button> */}
    </>
  );
};

Profile.defaultProps = {
  fullName: "Abedneebi Wael",
  profession: "Full Stack Developer",
  bio:
    "A Full Stack Developer  ",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};
export default Profile;