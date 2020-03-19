import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBookmark, faHeart, faComment, faShare, faUserCheck, faUserTimes, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
const Card = (props) => {
  // console.log(props.postContent);
  const { name, dateTime, id, title, img, job, button, email, postStatus, address } = props.UserDetails;
  return (
    <div className="left-content text-left">
      <div className="active-user d-flex align-items-center">
        <div className="user-img">
          <a href=""> <img src={img} alt="" className="user-img img-fluid img-round" />
          </a>
        </div>
        <div className="a ctive-user-details">
          <p className="active-user-name mb-0"> <a href="#"> {name} </a> </p>
          {/* <p className="active-status"><small>Active Now ✔ </small></p> */}
          <p className="userId mb-0"><small>Id: {id}</small></p>
          {/* <p className="userEmail mb-0"><small>{email}</small></p> */}
          <p className="userAddress mb-0">Address:<small> {address}</small></p>
          <p className="userJob">Job:<small>{job}</small></p>
        </div>
        <button className="btn btn-success">{button}</button>

      </div>
    </div>
  );
};

export default Card;