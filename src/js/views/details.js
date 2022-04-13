import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/details.css";

export const Detail = () => {
  const { store } = useContext(Context);
  const params = useParams();
  const id = params.theid;
  const character = store.people.find((c) => c.uid === id);
  const planet = store.planets.find((p) => p.uid === id);
  const vehicle = store.vehicles.find((v) => v.uid === id);

  console.log(character);

  return (
    <div className="container">
      <div className="d-flex">
        <img
          className="rounded mx-auto d-block"
          src="http://dummyimage.com/800x600"
        />
        <div className="detailText ms-5">
          {params.nature === "people" ? (
            <h1>{character.properties.name}</h1>
          ) : params.nature === "planets" ? (
            <h1>{planet.properties.name}</h1>
          ) : params.nature === "vehicles" ? (
            <h1>{vehicle.properties.name}</h1>
          ) : null}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            placerat sodales leo, id feugiat metus semper sed. Pellentesque
            dapibus metus quis volutpat mattis. Donec commodo mollis magna, non
            ornare quam tincidunt at. Fusce eu nibh eget ex luctus venenatis.
            Sed at odio blandit, euismod quam nec, iaculis ante.
          </p>
        </div>
      </div>
      <br />
      <div className="redLine"></div>
      <div className="container mt-5 mb-5 m-2">
        {params.nature === "people" ? (
          <div className="test d-flex justify-content-between text-danger">
            <div className="name">
              <b>Name:</b>
              <p>{character.properties.name}</p>
            </div>
            <div className="birthYear">
              <b>Birth Year:</b>
              <p>{character.properties.birth_year}</p>
            </div>
            <div className="gender">
              <b>Gender:</b>
              <p>{character.properties.gender}</p>
            </div>
            <div className="height">
              <b>Height:</b>
              <p>{character.properties.height}</p>
            </div>
            <div className="skin">
              <b>Skin Color:</b>
              <p>{character.properties.skin_color}</p>
            </div>
            <div className="eye-color">
              <b>Eye Color:</b>
              <p>{character.properties.eye_color}</p>
            </div>
          </div>
        ) : params.nature === "planets" ? (
          <div className="test">
            <p>
              <span>Population: {planet.properties.population}</span>
            </p>
            <p>
              <span>Terrain: {planet.properties.diameter}</span>
            </p>
          </div>
        ) : params.nature === "vehicles" ? (
          <div className="test">
            <p>
              <span>Cargo Capacity: {vehicle.properties.cargo_capacity}</span>
            </p>
            <p>
              <span>Manufacturer: {vehicle.properties.manufacturer}</span>
            </p>
          </div>
        ) : null}
      </div>
      <br />
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-primary btn-lg">Back home</button>
        </Link>
      </div>
    </div>
  );
};
