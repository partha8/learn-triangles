import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="home">
      <h2>Learn Triangles</h2>
      <section className="card-container">
        <Link to="/angles" className="card">
          Angles of Triangle?
        </Link>
        <Link to="/hypotenuse" className="card">
          Check hypotenuse
        </Link>
        <Link to="/area" className="card">
          calculate area
        </Link>
        <Link to="/quiz" className="card">
          take a quiz
        </Link>
      </section>
    </section>
  );
}

export default Home;
