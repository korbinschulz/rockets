import "./Rocket.css";

function Rocket({ name, year, img, about }) {
  return (
    <div className="rocket">
      <div className="rocket-outer">
        <a href={img}>
          <img src={img} />
        </a>
        <small className="img-src">Image from {img}</small>
        <div className="rocket-info">
          <div className="rocket-name">
            <h2>{name}</h2>
          </div>
          <div className="rocket-year">
            <h2>{year}</h2>
          </div>
          <div className="rocket-about">
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rocket;
