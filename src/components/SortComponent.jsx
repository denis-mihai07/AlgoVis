import "../css/SortComponent.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SortComponent({
  arrayToSort,
  sortingAlgorithm,
  sortingSpeed,
  start,
  reset,
}) {
  // hooks
  const [array, setArray] = useState(arrayToSort);
  const [algorithmName, setAlgorithmName] = useState(sortingAlgorithm);
  const [animationSpeed, setAnimationSpeed] = useState(sortingSpeed);
  const [isSorting, setIsSorting] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const timeoutsRef = useRef([]);

  const [animationStats, setAnimationStats] = useState({
    comparisons: 0,
    swaps: 0,
  });
  const [isComparing, setIsComparing] = useState(
    new Array(array.length).fill(false)
  );
  const [isCompleted, setIsCompleted] = useState(
    new Array(array.length).fill(false)
  );
  const [isSwapping, setIsSwapping] = useState(
    new Array(array.length).fill(false)
  );
  const [posArray, setPosArray] = useState(
    Array.from({ length: array.length }, (_, i) => i)
  );

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    if (start) {
      setIsSorting(true);
    }
    if (reset) {
      clearAllTimeouts();
      clearInterval(intervalRef.current);

      setTime(0);
      setAnimationStats({ comparisons: 0, swaps: 0 });
      setIsCompleted(new Array(array.length).fill(false));
      setArray(arrayToSort);
      setIsSorting(false);
      setIsComparing(new Array(array.length).fill(false));
      setPosArray(Array.from({ length: arrayToSort.length }, (_, i) => i));
    }
  }, [start, reset, arrayToSort, sortingAlgorithm, sortingSpeed]);

  useEffect(() => {
    if (isSorting) {
      animate(getSortingAlgorithm(array));
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isSorting]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 100);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    const formattedMilliseconds = String(milliseconds);

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  const getSortingAlgorithm = (arr) => {
    switch (algorithmName) {
      case "Bubble Sort":
        return bubbleSort(arr);
      case "Selection Sort":
        return selectionSort(arr);
      default:
        break;
    }
  };
  // sorting algorithms
  const bubbleSort = (arr) => {
    const steps = [];
    const n = arr.length;
    let v = [...arr];
    let sorted;

    for (let i = 0; i < n - 1; i++) {
      sorted = false;
      for (let j = 0; j < n - i - 1; j++) {
        steps.push({ type: "comparison", indices: [j, j + 1] });
        if (v[j] > v[j + 1]) {
          steps.push({ type: "swap", indices: [j, j + 1] });
          [v[j], v[j + 1]] = [v[j + 1], v[j]];
          sorted = true;
        }
      }
      if (!sorted) break;
    }

    return steps;
  };
  const selectionSort = (arr) => {
    const steps = [];
    const n = arr.length;
    let v = [...arr];

    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        steps.push({ type: "comparison", indices: [i, j] });
        if (v[i] > v[j]) {
          [v[i], v[j]] = [v[j], v[i]];
          steps.push({ type: "swap", indices: [i, j] });
        }
      }
    }

    return steps;
  };
  // animation logic
  const animateSwapping = (indices) => {
    if (indices[0] > indices[1]) {
      [indices[0], indices[1]] = [indices[1], indices[0]];
    }
    const [x, y] = indices;
    setIsSwapping((prev) => {
      return prev.map((_, i) => i === x || i === y);
    });
    const timeoutId = setTimeout(() => {
      setArray((prev) => {
        const newArr = [...prev];
        [newArr[x], newArr[y]] = [newArr[y], newArr[x]];
        return newArr;
      });

      setPosArray((prev) => {
        const newArr = [...prev];
        [newArr[x], newArr[y]] = [newArr[y], newArr[x]];
        return newArr;
      });
      setIsSwapping(new Array(array.length).fill(false));
    }, 1000 - animationSpeed * 100 + 100);
    timeoutsRef.current.push(timeoutId);
  };
  const animate = (steps) => {
    if (steps.length === 0 || !isSorting) {
      setIsSorting(false);
      setIsComparing(new Array(array.length).fill(false));
      setIsCompleted(new Array(array.length).fill(true));
      clearAllTimeouts();
      return;
    }

    const { type, indices } = steps[0];

    if (type === "comparison") {
      setAnimationStats((prev) => {
        const statType = "comparisons";
        return {
          ...prev,
          [statType]: prev[statType] + 1,
        };
      });
      setIsComparing((prev) => {
        return prev.map((_, i) => {
          return indices.includes(i) ? true : false;
        });
      });
    } else {
      animateSwapping(indices);
      setIsComparing(new Array(array.length).fill(false));
    }

    const timeoutId = setTimeout(() => {
      if (type === "swap") {
        setAnimationStats((prev) => {
          const statType = "swaps";
          return {
            ...prev,
            [statType]: prev[statType] + 1,
          };
        });
      }
      animate(steps.slice(1));
    }, 1000 - animationSpeed * 100 + 200);
    timeoutsRef.current.push(timeoutId);
  };
  const swapAnimation = {
    initial: {
      backgroundColor: "#a9fda9",
      scale: 1,
      y: 0,
    },
    swap: {
      scale: 1.1,
      backgroundColor: "#daaaffff",
      y: -10,
    },
    reset: {
      scale: 1,
      backgroundColor: "#ffffffff",
      y: 0,
    },
  };

  return (
    <>
      <div className="sorter_container">
        <div className="sorter_header">
          <div className="algorithm_name">{algorithmName}</div>
          <div className="algorithm_timer">
            Time: <span>{formatTime(time)}</span>
          </div>
        </div>
        <div className="sorter_content">
          {array.map((val, i) => (
            <motion.div
              className={`array_block ${isComparing[i] ? "highlight" : ""} ${
                isCompleted[i] ? "completed" : ""
              }`}
              key={posArray[i]}
              layout
              transition={{ duration: 0.5 }}
              variants={swapAnimation}
              animate={isSwapping[i] ? "swap" : "reset"}
            >
              {val}
            </motion.div>
          ))}
        </div>
        <div className="sorter_footer">
          <div className="footer_info">
            Comparisons: {animationStats.comparisons}
          </div>
          <div className="footer_info">Swaps: {animationStats.swaps}</div>
        </div>
      </div>
    </>
  );
}
