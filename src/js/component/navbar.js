import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

const URL_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/320px-Star_wars2.svg.png";
const URL_BASE = "https://www.swapi.tech/api";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState([]);
  const searchPeople = async (event) => {
    try {
      console.log(event);
      let response = await fetch(
        `${URL_BASE}/people/?name=${event.target.value}`
      );
      let results = await response.json();
      console.log(results);
      if (response.ok) {
        setSearch(results.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            className="img-fluid"
            alt="Responsive image"
            src={URL_IMG}
            width="160"
          />
        </span>
      </Link>
      <div className="ml-auto d-flex">
        <div className="nav-item dropdown mx-5">
          <button
            className="btn btn-success dropdown-toggle me-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search
          </button>
          <div
            className="m-0 p-0 dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <input
              className="form-control "
              type="text"
              placeholder="Person Name"
              onChange={(event) => searchPeople(event)}
            ></input>
            {search.length > 0 && (
              <div className="list-group-item">
                {search.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className="test"
                        to={"/detail/people" + "/" + item.uid}
                      >
                        <span className="search">{item.properties.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="nav-item dropdown mx-5">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-secondary">{` ${store.favorites.length}`}</span>
          </button>
          <div
            className="m-0 p-0 dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1 "
          >
            {!store.favorites.length ? (
              <li className="list-group-item text-center text-muted">
                {" "}
                *Empty*{" "}
              </li>
            ) : (
              store.favorites.map((item) => {
                return (
                  <li key={item._id} className="list-group-item text-center">
                    {item.properties.name}{" "}
                    <i
                      className="fas fa-trash"
                      onClick={() => actions.deleteFavorites(item._id)}
                    />
                  </li>
                );
              })
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
