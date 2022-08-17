import axios from "axios";
import React, { useEffect } from "react";
import "./ViewRockets.css";

function ViewRockets() {
  const getData = () => {
    const getUrl = "http://localhost:3000/api/rockets/";
    axios
      .get(getUrl)
      .then(function (res) {
        console.log("Data has been fetched!");
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error fetching rockets from database, please try again!");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="view-rockets">
      <h2>
        The Rockets below are the ones currently existing in the database.
      </h2>
    </div>
  );
}

export default ViewRockets;
