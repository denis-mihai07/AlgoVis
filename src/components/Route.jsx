import "../css/Route.css";
import { CategoryBlock } from "./Homepage";
import { sortMap, searchMap, graphMap, getMap } from "../utils";

const getHeader = (route) => {
  switch (route) {
    case "Sorting":
      return [
        "Sorting Algorithms",
        "Watch and compare how various sorting algorithms arrange data, step by step, in real time.",
      ];
    case "Searching":
      return [
        "Searching Algorithms",
        "Discover and compare how various searching algorithms find an item in a data set.",
      ];
    case "Graph":
      return [
        "Graph Algorithms",
        "Visualize and compare how various graph algorithms traverse and find paths in a network.",
      ];
  }
};

const Route = ({ route }) => {
  const map = Array.from(getMap(route));
  const [title, subtitle] = getHeader(route);
  return (
    <>
      <div className="route_container">
        <div className="route_header">
          <div className="route_title">{title}</div>
          <div className="route_subtitle">{subtitle}</div>
        </div>
        <div className="route_content">
          {map.map((_, i) => (
            <CategoryBlock
              title={map[i][0]}
              subtitle={map[i][1]}
              type={route}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Route;
