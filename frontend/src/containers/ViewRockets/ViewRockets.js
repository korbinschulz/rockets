import axios from "axios";
import Rocket from "../../components/rocket/Rocket";
import React, { useEffect, useState } from "react";
import "./ViewRockets.css";

function ViewRockets() {
  const [rockets, setRockets] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUrl = "http://localhost:3000/api/rockets/";
    axios
      .get(getUrl)
      .then(function (res) {
        console.log("Data has been fetched!");
        console.log(res);
        setRockets(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error fetching rockets from database, please try again!");
      });
  }, []);

  if (isLoading) {
    return (
      <div className="view-rockets">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="view-rockets">
      <h2>
        The Rockets below are the ones currently existing in the database.
      </h2>
      <div className="rockets">
        {rockets.map((ship) => (
          <div className="rocket" key={ship._id}>
            <Rocket
              name={ship.name}
              year={ship.year}
              img={ship.img}
              about={ship.about}
              id={ship._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewRockets;
