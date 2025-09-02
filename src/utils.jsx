export const getRoute = (name) => {
  switch (name) {
    case "Bubble Sort":
      return "sorting/bubbleSort";
      break;
    case "Selection Sort":
      return "sorting/selectionSort";
      break;
    case "Insertion Sort":
      return "sorting/insertionSort";
      break;
    case "Linear Search":
      return "searching/linearSearch";
      break;
    case "Binary Search":
      return "searching/binarySearch";
      break;
    case "Interpolation Search":
      return "searching/interpolationSearch";
      break;
    case "Depth-First Search":
      return "graph/dfs";
      break;
    case "Breadth-First Search":
      return "graph/bfs";
      break;
    case "Dijkstra's Algorithm":
      return "graph/dijkstra";
      break;
    default:
      break;
  }
};

export const map = new Map([
  [
    "Bubble Sort",
    <>
      Bubble sort is a simple sorting algorithm that repeatedly compares and
      swaps adjacent elements that are in the wrong order. Its time complexity
      is O(n<sup>2</sup>), making it inefficient for large datasets, but it's
      easy to understand and implement. The name comes from how smaller elements
      'bubble up' to the beginning of the list.
    </>,
  ],
  ["Selection Sort", "mn"],
  ["Insertion Sort", "mn"],
]);
