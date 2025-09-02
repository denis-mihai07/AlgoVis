import { useState } from "react";
import "../css/App.css";
import HomePage from "./Homepage";
import AlgoSort from "./AlgoSort";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Header.jsx";
import Route from "./Route.jsx";
import Footer from "./Footer.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <HomePage />
          <Footer />
        </>
      ),
    },
    {
      path: "/sorting",
      element: (
        <>
          <Header />
          <Route route={"Sorting"} />
          <Footer />
        </>
      ),
    },
    {
      path: "/searching",
      element: (
        <>
          <Header />
          <Route route={"Searching"} />
          <Footer />
        </>
      ),
    },
    {
      path: "/graph",
      element: (
        <>
          <Header />
          <Route route={"Graph"} />
          <Footer />
        </>
      ),
    },
  ],
  {
    basename: "/AlgoVis",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
