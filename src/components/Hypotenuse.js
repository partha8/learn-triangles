import React, { useState } from "react";
import { Link } from "react-router-dom";
import triangle from "../img/hypotenuse.png";

function Hypotenuse() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState("");
  const clickHandler = () => {
    const answer = Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
    setC(answer);
  };
  return (
    <section className="hypotenuse-section container">
      <Link className="go-back" to="/">
        Go back
      </Link>
      <p className="section-intro">
        Let's calculate hypotenuse of a right angled triangle
      </p>

      <article>
        <img className="img" src={triangle} alt="triangle" />
      </article>
      <article className="input-container">
        <span>a=</span>
        <input
          className="angle-input"
          value={a}
          onChange={(e) => setA(e.target.value)}
          type="number"
          min="0"
        />
        <span>b=</span>
        <input
          className="angle-input"
          value={b}
          onChange={(e) => setB(e.target.value)}
          type="number"
          min="0"
        />
      </article>
      <article className="btn-container">
        <button onClick={clickHandler} className="btn">
          Submit
        </button>
      </article>
      <article className="result-angle">
        output will be shown here:
        <br />c = <span className="answer">{c}</span>
      </article>
    </section>
  );
}

export default Hypotenuse;
