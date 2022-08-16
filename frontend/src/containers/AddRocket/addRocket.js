import "./addRocket.css";
import { useState } from "react";
import axios from "axios";

function AddRocket() {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    img: "",
    about: "",
  });

  let { name, year, img, about } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.year]: e.target.value,
      [e.target.img]: e.target.value,
      [e.target.about]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postUrl = "http://localhost:3000/api/rockets/";

    const rocketData = {
      name,
      year,
      img,
      about,
    };

    axios
      .post(postUrl, rocketData)
      .then(function (response) {
        console.log(response);
        alert("Rocket has been added to the database!");
      })
      .catch(function (error) {
        console.log(error);
        alert(
          "Error, please check that rocket doesn't already exist and then try again!"
        );
      });

    setFormData({
      name: "",
      year: "",
      img: "",
      about: "",
    });
  };

  return (
    <div className="add-rocket">
      <h2>
        Enter a new rocket's details to add its information to the database
      </h2>
      <section>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3 className="form-header">Name of Rocket</h3>
              <input
                required
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <h3 className="form-header">Year of Launch</h3>
              <input
                required
                type="text"
                className="form-control"
                name="year"
                id="year"
                value={year}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <h3 className="form-header">Picture of Rocket (url)</h3>
              <input
                required
                type="url"
                className="form-control"
                name="img"
                id="img"
                value={img}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <h3 className="form-header">About the Rocket</h3>
              <textarea
                required
                rows="2"
                columns="25"
                type="text"
                className="form-control-abt"
                name="about"
                id="about"
                value={about}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddRocket;
