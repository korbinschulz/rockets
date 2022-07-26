import "./Home.css";
import Rocket from "../rocket/Rocket";

function Home() {
  let thisYear = new Date().getFullYear();
  return (
    <div className="home">
      <Rocket name="Korbin Schulz" year={thisYear} />
    </div>
  );
}

export default Home;
