//Just a copy from movie not working on it, not important
import React from "react";
import place from "../assets/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";
import { Link } from "react-router-dom";
import { pathImg } from "../constant/pathImg";

export default function PersonCard({ person }) {
  return (
    <div className="col-md-2">
      <Link to={`/person/${person.id}`}>
        <img
          className="w-100 h-75"
          src={person.profile_path ? pathImg(person.profile_path) : place}
          alt=""
        />
        <h1
          className="text-truncate h4 text-center mt-1 text-warning"
          data-toggle="tooltip"
          data-placement="start"
          title={person.name ? person.name : "unkown"}
        >
          {person.name ? person.name : "unkown"}
        </h1>
      </Link>
    </div>
  );
}
