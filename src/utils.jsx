export const getRoute = (name) => {
  switch (name) {
    case "Bubble Sort":
      return "/sorting/bubbleSort";
    case "Selection Sort":
      return "/sorting/selectionSort";
    case "Insertion Sort":
      return "/sorting/insertionSort";
    case "Merge Sort":
      return "/sorting/mergeSort";
    case "Quick Sort":
      return "/sorting/quickSort";
    case "Heap Sort":
      return "/sorting/heapSort";
    case "Linear Search":
      return "/searching/linearSearch";
    case "Binary Search":
      return "/searching/binarySearch";
    case "Interpolation Search":
      return "/searching/interpolationSearch";
    case "Depth-First Search":
      return "/graph/dfs";
    case "Breadth-First Search":
      return "/graph/bfs";
    case "Dijkstra's Algorithm":
      return "/graph/dijkstra";
    default:
      break;
  }
};

export const getMap = (name) => {
  switch (name) {
    case "Sorting":
      return sortMap;
    case "Searching":
      return searchMap;
    case "Graph":
      return graphMap;
    default:
      break;
  }
};

export const sortMap = new Map([
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
  ["Merge Sort", "mn"],
  ["Quick Sort", "mn"],
  ["Heap Sort", "mn"],
]);

export const searchMap = new Map([
  [
    "Linear Search",
    <>
      Bubble sort is a simple sorting algorithm that repeatedly compares and
      swaps adjacent elements that are in the wrong order. Its time complexity
      is O(n<sup>2</sup>), making it inefficient for large datasets, but it's
      easy to understand and implement. The name comes from how smaller elements
      'bubble up' to the beginning of the list.
    </>,
  ],
  ["Binary Search", "mn"],
  ["Interpolation Search", "mn"],
]);

export const graphMap = new Map([
  [
    "Depth-First Search",
    <>
      Bubble sort is a simple sorting algorithm that repeatedly compares and
      swaps adjacent elements that are in the wrong order. Its time complexity
      is O(n<sup>2</sup>), making it inefficient for large datasets, but it's
      easy to understand and implement. The name comes from how smaller elements
      'bubble up' to the beginning of the list.
    </>,
  ],
  ["Breadth-First Search", "mn"],
  ["Dijkstra's Algorithm", "mn"],
]);
