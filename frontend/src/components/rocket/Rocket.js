import "./Rocket.css";

function Rocket({ name, year, img, video, imgsrc, about }) {
  return (
    <div className="rocket">
      <div className="rocket-outer">
        <a href={imgsrc}>
          <img src={img} />
        </a>
        <small className="img-src">Image from {imgsrc}</small>
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
