import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to X Rockets!</h1>
      <div className="home-img">
        <img src="https://images.unsplash.com/photo-1614642240262-a452c2c11724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9ja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
      <p className="body">
        A CRUD app created to manage a database of rockets!
        <span className="body-2">
          <br />
          This app was made using Node/Express, React, Vanilla CSS, and MongoDB!
        </span>
      </p>
    </div>
  );
}

export default Home;
