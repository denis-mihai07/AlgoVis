import "../css/HomePage.css";
import AlgoVisLogo from "../assets/AlgoVis.svg";
import { div } from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { sortMap, searchMap, graphMap, getRoute } from "../utils";

export const CategoryBlock = ({ title, subtitle, type }) => {
  const blockRoute = getRoute(title);

  return (
    <div className="block">
      <div className="block_title">{title}</div>
      <div className="block_subtitle">{subtitle}</div>
      <div className="block_footer">
        <div className="block_category">{type}</div>
        <Link className="block_button" to={blockRoute}>
          <span>Visualise</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <div className="homepage_container">
        <div className="homepage_title">
          <div className="homepage_logo">
            <img src={AlgoVisLogo} />
          </div>
        </div>
        <div className="homepage_content">
          <div className="category">
            <div className="category_name">
              <Link className="catname_container" to={"/sorting"}>
                <div className="title">Sorting Algorithms</div>
                <div className="subtitle">
                  Watch and compare how various sorting algorithms arrange data,
                  step by step, in real time.
                </div>
              </Link>
            </div>
            <div className="category_content">
              <CategoryBlock
                title={"Bubble Sort"}
                subtitle={sortMap.get("Bubble Sort")}
                type={"Sorting"}
              />
              <CategoryBlock
                title={"Selection Sort"}
                subtitle={sortMap.get("Selection Sort")}
                type={"Sorting"}
              />
              <CategoryBlock
                title={"Insertion Sort"}
                subtitle={sortMap.get("Insertion Sort")}
                type={"Sorting"}
              />
              <Link className="view_all_button" to={"/sorting"}>
                <span>View All</span>
                <div className="view_all_circle">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </Link>
            </div>
          </div>
          <div className="category">
            <div className="category_name cat2">
              <Link className="catname_container" to={"/searching"}>
                <div className="title">Searching Algorithms </div>
                <div className="subtitle">
                  Discover and compare how various searching algorithms find an
                  item in a data set.
                </div>
              </Link>
            </div>
            <div className="category_content cat3">
              <Link className="view_all_button" to={"/searching"}>
                <span>View All</span>
                <div className="view_all_circle">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </div>
              </Link>
              <CategoryBlock
                title={"Linear Search"}
                subtitle={searchMap.get("Linear Search")}
                type={"Searching"}
              />
              <CategoryBlock
                title={"Binary Search"}
                subtitle={searchMap.get("Binary Search")}
                type={"Searching"}
              />
              <CategoryBlock
                title={"Interpolation Search"}
                subtitle={searchMap.get("Interpolation Search")}
                type={"Searching"}
              />
            </div>
          </div>
          <div className="category">
            <div className="category_name ">
              <Link className="catname_container" to={"/graph"}>
                <div className="title">Graph Algorithms </div>
                <div className="subtitle">
                  Visualize and compare how various graph algorithms traverse
                  and find paths in a network.
                </div>
              </Link>
            </div>
            <div className="category_content">
              <CategoryBlock
                title={"Depth-First Search"}
                subtitle={graphMap.get("Depth-First Search")}
                type={"Graph"}
              />
              <CategoryBlock
                title={"Breadth-First Search"}
                subtitle={graphMap.get("Breadth-First Search")}
                type={"Graph"}
              />
              <CategoryBlock
                title={"Dijkstra's Algorithm"}
                subtitle={graphMap.get("Dijkstra's Algorithm")}
                type={"Graph"}
              />
              <Link className="view_all_button" to={"/graph"}>
                <span>View All</span>
                <div className="view_all_circle">
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
