import axios from "axios";
import { useState } from "react";
import "./Rocket.css";

function Rocket({ name, year, img, about, id }) {
  const [delRocket, setDelRocket] = useState(false);
  const [editRocket, setEditRocket] = useState(false);
  const [rocketData, setRocketData] = useState({
    name,
    year,
    img,
    about,
    id,
  });

  const handleDelete = () => {
    const delUrl = `http://localhost:3000/api/rockets/${id}`;

    axios
      .delete(delUrl)
      .then(function (response) {
        setDelRocket(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error deleting the rocket, please try again!");
      });
  };
  if (delRocket) {
    return <div></div>;
  }

  const handleEdit = () => {
    setEditRocket(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setRocketData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.year]: e.target.value,
      [e.target.img]: e.target.value,
      [e.target.about]: e.target.value,
    }));
    console.log(rocketData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const putUrl = `http://localhost:3000/api/rockets/${id}`;

    axios
      .put(putUrl, rocketData)
      .then(function (response) {
        console.log(response);
        alert("Rocket data has been updated!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error updating rocket, please try again!");
      });
  };

  if (editRocket) {
    return (
      <div className="edit-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>New Name:</h2>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder={name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <h2>New Year:</h2>
            <input
              type="text"
              className="form-control"
              name="year"
              id="year"
              placeholder={year}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <h2>New URL:</h2>
            <input
              type="url"
              className="form-control"
              name="img"
              id="img"
              placeholder={img}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h2>New About:</h2>
            <textarea
              rows="2"
              columns="25"
              type="text"
              className="form-control-abt"
              name="about"
              id="about"
              placeholder={about}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="del-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="rocket">
      <div className="rocket-header">
        <h2 className="rocket-name">
          Rocket Name: <span className="title">{name}</span>
        </h2>
        <h2 className="rocket-year">Year of Launch: {year}</h2>
      </div>

      <div className="rocket-body">
        <img src={img} alt="Rocket" className="rocket-img" />

        <p className="rocket-about">{about}</p>
      </div>
      <div className="buttons">
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button className="del-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Rocket;
