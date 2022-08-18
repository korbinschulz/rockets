import axios from "axios";
import "./Rocket.css";

function Rocket({ name, year, img, about, id }) {
  const handleClick = () => {
    const delUrl = `http://localhost:3000/api/rockets/${id}`;

    axios
      .delete(delUrl)
      .then(function (response) {
        alert("Rocket has successfully been deleted from the database!");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error deleting the rocket, please try again!");
      });
  };

  return (
    <div className="rocket">
      <div className="rocket-header">
        <h2 className="rocket-name">
          Rocket Name: <span className="name-prop">{name}</span>
        </h2>
        <h2 className="rocket-year">Year of Launch: {year}</h2>
      </div>

      <div className="rocket-body">
        <img src={img} alt="Rocket" className="rocket-img" />
        <p className="rocket-about">{about}</p>
      </div>
      <button className="del-btn" onClick={handleClick}>
        Delete Rocket
      </button>
    </div>
  );
}

export default Rocket;
