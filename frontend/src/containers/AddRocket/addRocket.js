import React from "react";
import { useState } from "react";

function AddRocket() {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    img: "",
    about: "",
  });

  const { name, year, img, about } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-rocket">
      <h2>
        Enter a new rocket's details to add its information to the database
      </h2>
      <section>
        <div className="form">
          <form onSubmit={handleSubmit} />
          <div className="form-group">
            <h3 className="form-header">Name of Rocket</h3>
            <input
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
            <input
              type="text"
              className="form-control"
              name="about"
              id="about"
              value={about}
              onChange={onChange}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddRocket;
