import "./Keypad.css";
import Result from "./Result";


const Keypad = ({ onClick, result }) => {
  console.log(result);
  return (
    <div className="container">
      <div
        className="calculator background"
      >
        <Result result={result} />
        <div className="keys">
          <button
            name="7"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            7
          </button>
          <button
            name="8"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            8
          </button>
          <button
            name="9"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            9
          </button>
          <button
            name="/"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            &divide;
          </button>
          <button
            name="4"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            4
          </button>
          <button
            name="5"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            5
          </button>
          <button
            name="6"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            6
          </button>
          <button
            name="*"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            &times;
          </button>
          <button
            name="1"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            1
          </button>
          <button
            name="2"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            2
          </button>
          <button
            name="3"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            3
          </button>
          <button
            name="-"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            -
          </button>
          <button
            name="0"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            0
          </button>
          <button
            name="."
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            .
          </button>
          <button
            name="AC"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            AC
          </button>
          <button
            name="+"
            className="btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            +
          </button>
          <button
            name="="
            className="equal btn btn-secondary"
            onClick={(e) => onClick(e.target.name)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keypad;
