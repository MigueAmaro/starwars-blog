import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Card = ({ value, nature }) => {
  const { properties, _id } = value;
  const { actions } = useContext(Context);

  return (
    <div className="card">
      <img
        className="card-img-top"
        src="http://dummyimage.com/400x200"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{properties.name}</h5>
        <div className="card-body">
          {nature === "people" ? (
            <div className="card-body-inside">
              <p>
                <span>Gender: {properties.gender}</span>
              </p>
              <p>
                <span>Hair Color: {properties.hair_color}</span>
              </p>
              <p>
                <span>Eye Color: {properties.eye_color}</span>
              </p>
            </div>
          ) : nature === "planets" ? (
            <div className="card-body-inside">
              <p>
                <span>Population: {properties.population}</span>
              </p>
              <p>
                <span>Terrain: {properties.diameter}</span>
              </p>
            </div>
          ) : nature === "vehicles" ? (
            <div className="card-body-inside">
              <p>
                <span>Cargo Capacity: {properties.cargo_capacity}</span>
              </p>
              <p>
                <span>Manufacturer: {properties.manufacturer}</span>
              </p>
            </div>
          ) : null}{" "}
          {/* end of IF ELSE JSX */}
          <div className="d-flex justify-content-between">
            <Link
              className="btn btn-primary"
              to={"/detail/" + nature + "/" + value.uid}
            >
              Learn more!
            </Link>
            <button
              href="#"
              className="btn btn-outline-danger btn far fa-heart"
              onClick={() => actions.hearted(_id)}
            />
          </div>
        </div>{" "}
        {/* cardbody div */}
      </div>
    </div>
  );
};

Card.propTypes = {
  value: PropTypes.object,
  nature: PropTypes.string,
  image: PropTypes.string,
};
export default Card;
