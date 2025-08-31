import "../css/HomePage.css";
import AlgoVisLogo from "../assets/AlgoVis.svg";
import { div } from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { map } from "../utils";

const CategoryBlock = ({ title, subtitle, type }) => {
  return (
    <div className="block">
      <div className="block_title">{title}</div>
      <div className="block_subtitle">{subtitle}</div>
      <div className="block_footer">
        <div className="block_category">{type}</div>
        <Link className="block_button" to={"/sorting"}>
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
              <div className="catname_container">
                <div className="title">Sorting Algorithms </div>
                <div className="subtitle">
                  Watch and compare how various sorting algorithms arrange data,
                  step by step, in real time.
                </div>
              </div>
            </div>
            <div className="category_content">
              <CategoryBlock
                title={"Bubble Sort"}
                subtitle={map.get("Bubble Sort")}
                type={"Sorting"}
              />
              <CategoryBlock
                title={"Selection Sort"}
                subtitle={map.get("Selection Sort")}
                type={"Sorting"}
              />
              <CategoryBlock
                title={"Insertion Sort"}
                subtitle={map.get("Insertion Sort")}
                type={"Sorting"}
              />
            </div>
          </div>
          <div className="category ">
            <div className="category_content cat3">
              <CategoryBlock
                title={"Linear Search"}
                subtitle={map.get("Linear Search")}
                type={"Searching"}
              />
              <CategoryBlock
                title={"Binary Search"}
                subtitle={map.get("Binary Search")}
                type={"Searching"}
              />
            </div>
            <div className="category_name cat2">
              <div className="catname_container ">
                <div className="title">Searching Algorithms </div>
                <div className="subtitle">
                  Discover and compare how various searching algorithms find an
                  item in a data set.
                </div>
              </div>
            </div>
          </div>
          <div className="category">
            <div className="category_name ">
              <div className="catname_container ">
                <div className="title">Graph Algorithms </div>
                <div className="subtitle">
                  Visualize and compare how various graph algorithms traverse
                  and find paths in a network.
                </div>
              </div>
            </div>
            <div className="category_content">
              <CategoryBlock
                title={"Depth-First Search"}
                subtitle={map.get("DFS")}
                type={"Graph"}
              />
              <CategoryBlock
                title={"Breadth-First Search"}
                subtitle={map.get("BFS")}
                type={"Graph"}
              />
              <CategoryBlock
                title={"Dijkstra's Algorithm"}
                subtitle={map.get("Dijkstra")}
                type={"Graph"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
