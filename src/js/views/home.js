import React, { useContext, useState, useRef } from "react";
import Card from "../component/Card.js";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let [initialDisplay, setInitialDisplay] = useState(5);
  const listInnerRef = useRef();

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = listInnerRef.current;
      if (scrollLeft + clientWidth === scrollWidth) {
        setInitialDisplay(initialDisplay + 5);
      }
    }
  };
  return (
    <>
      <div className="container">
        <p className="text-danger display-4 ">Characters</p>
        <div className="showcase-list" onScroll={onScroll} ref={listInnerRef}>
          {store.people
            ? store.people
                .filter((value, index) => index < initialDisplay)
                .map((value) => {
                  return <Card key={value._id} value={value} nature="people" />;
                })
            : ""}
        </div>
        <p className="text-danger display-4 ">Planets</p>
        <div className="showcase-list">
          {store.planets
            ? store.planets.map((value) => {
                return <Card key={value._id} value={value} nature="planets" />;
              })
            : ""}
        </div>
        <p className="text-danger display-4 ">Vehicles</p>
        <div className="showcase-list">
          {store.vehicles
            ? store.vehicles.map((value) => {
                return <Card key={value._id} value={value} nature="vehicles" />;
              })
            : ""}
        </div>
      </div>
    </>
  );
};
