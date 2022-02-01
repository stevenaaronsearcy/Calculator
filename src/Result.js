import "./App.css";

const Result = ({ result }) => {
  return (
    <>
      <input type="button" className="input z-depth-1" value={result} />
    </>
  );
};

export default Result;
