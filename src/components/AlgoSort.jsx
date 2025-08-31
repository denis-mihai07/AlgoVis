import { useState } from "react";
import "../css/AlgoSort.css";
import SortComponent from "./SortComponent.jsx";

export default function AlgoSort() {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const handleReset = () => {
    setReset(true);
    setStart(false);
    setTimeout(() => {
      setReset(false);
    }, 500);
  };
  return (
    <div className="app">
      <div className="app_header">
        <div className="app_logo"></div>
        <div className="theme_button"></div>
      </div>
      <div className="app_content">
        <button onClick={() => setStart(true)}>start</button>
        <button onClick={handleReset}>reset</button>

        <SortComponent
          arrayToSort={[3, 4, 1, 5, 2]}
          sortingAlgorithm={"Selection Sort"}
          sortingSpeed={5}
          start={start}
          reset={reset}
        />
      </div>
    </div>
  );
}
