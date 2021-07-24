import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import area1 from "../img/area1.png";
import area2 from "../img/area2.png";
import area3 from "../img/area3.png";

function Area() {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option, setOption] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);

  const clickHandler = () => {
    if (option1) {
      const area = (Number(input1) * Number(input2)) / 2;
      setAnswer(area);
    } else if (option2) {
      const s = (Number(input1) + Number(input2) + Number(input3)) / 2;
      const area = Math.sqrt(
        s * (s - Number(input1)) * (s - Number(input2)) * (s - Number(input3))
      );
      setAnswer(area);
    } else if (option3) {
      const area =
        (Number(input1) *
          Number(input2) *
          Math.sin((Number(input3) * Math.PI) / 180)) /
        2;
      setAnswer(area);
    }
  };
  useEffect(() => {
    if (option === "1") {
      setOption1(true);
      setOption2(false);
      setOption3(false);
    } else if (option === "2") {
      setOption1(false);
      setOption2(true);
      setOption3(false);
    } else if (option === "3") {
      setOption1(false);
      setOption2(false);
      setOption3(true);
    }
    setAnswer(0);
    setInput1(0);
    setInput2(0);
    setInput3(0);
  }, [option]);
  return (
    <section className="area-section container">
      <Link className="go-back" to="/">
        Go back
      </Link>
      <form>
        <div className="radio-container">
          <label htmlFor="area1">
            <input
              type="radio"
              id="area1"
              name="areaCalOption"
              value="1"
              onChange={(e) => setOption(e.target.value)}
            />
            If you have base and height length
          </label>{" "}
          <label htmlFor="area2">
            <input
              type="radio"
              id="area2"
              name="areaCalOption"
              value="2"
              onChange={(e) => setOption(e.target.value)}
            />
            If you have length of 3 sides
          </label>{" "}
          <label htmlFor="area3">
            <input
              type="radio"
              id="area3"
              name="areaCalOption"
              value="3"
              onChange={(e) => setOption(e.target.value)}
            />
            If you have length of 2 sides and included angle
          </label>
        </div>
      </form>
      {option1 && (
        <section className="area-images">
          {" "}
          <article>
            <img className="img" src={area1} alt="triangle" />
          </article>
          <article className="input-container">
            <span>base=</span>
            <input
              className="angle-input"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              type="number"
              min="1"
            />
            <span>height=</span>
            <input
              className="angle-input"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
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
      )}
      {option2 && (
        <section className="area-images">
          {" "}
          <article>
            <img className="img" src={area2} alt="triangle" />
          </article>
          <article className="input-container">
            <span>a=</span>
            <input
              className="angle-input"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              type="number"
              min="1"
            />
            <span>b=</span>
            <input
              className="angle-input"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              type="number"
              min="1"
            />
            <span>c=</span>
            <input
              className="angle-input"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
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
      )}
      {option3 && (
        <section className="area-images">
          {" "}
          <article>
            <img className="img" src={area3} alt="triangle" />
          </article>
          <article className="input-container">
            <span>side 1=</span>
            <input
              className="angle-input"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              type="number"
              min="1"
            />
            <span>side 2=</span>
            <input
              className="angle-input"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              type="number"
              min="1"
            />
            <span>Angle A=</span>
            <input
              className="angle-input"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
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
      )}
    </section>
  );
}

export default Area;
