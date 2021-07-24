import React, { useState } from "react";
import { Link } from "react-router-dom";

function Angles() {
  const [angle1, setAngle1] = useState(1);
  const [angle2, setAngle2] = useState(1);
  const [angle3, setAngle3] = useState(1);
  const [answer, setAnswer] = useState("");

  const clickHandler = () => {
    const sum = Number(angle1) + Number(angle2) + Number(angle3);
    if (sum === 180) {
      setAnswer(`The angles make a triangle!`);
    } else {
      setAnswer(`The angles can't make a triangle.`);
    }
  };

  return (
    <section className="angle-section container">
      <Link className="go-back" to="/">
        Go back
      </Link>
      <p className="section-intro">
        Please input the measure of all the angles of triangle in degrees, and
        we will tell you if those angles make a Triangle
      </p>
      <article className="input-container">
        <input
          className="angle-input"
          value={angle1}
          onChange={(e) => setAngle1(e.target.value)}
          type="number"
          min="1"
        />
        <input
          className="angle-input"
          value={angle2}
          onChange={(e) => setAngle2(e.target.value)}
          type="number"
          min="1"
        />
        <input
          className="angle-input"
          value={angle3}
          onChange={(e) => setAngle3(e.target.value)}
          type="number"
          min="1"
        />
      </article>
      <article className="btn-container">
        <button onClick={clickHandler} className="btn">
          Submit
        </button>
      </article>
      <article className="result-angle">
        output will be shown here
        <div className="answer">{answer}</div>
      </article>
    </section>
  );
}

export default Angles;
