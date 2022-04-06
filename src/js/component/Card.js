import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link , useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
//set this up when is only a character and not a planet

const Card = props => {
    
    const params = useParams();
    const { store, actions } = useContext(Context);
    return (
        <div className="col-3">
            <div className="card">
                <img src={props.image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Name: {props.value.name}</h5>
                    <p className="card-text">
                        {props.category === "people" ? (
                        <span>
                            Gender: {`${props.people.gender  && props.people.gender ? props.people.gender : ""}`}
                            Hair Color: {`${props.people.hair_color}`}
                            Eye Color: {`${props.people.eye_color}`}
                            </span>)
                            : (<span>
                                Population:{props.value && props.value.population ? props.value.population : ""}
                                Terrain:{props.value.diameter}
                            </span>)}
                    </p>


                    <Link
                        to=""
                        className="btn btn-primary">
                        Learn more!
                    </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    value: PropTypes.object,
    index: PropTypes.number,
    people: PropTypes.array,
    category: PropTypes.string,
    image: PropTypes.string
};

export default Card;