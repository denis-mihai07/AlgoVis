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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "/sorting",
    element: (
      <>
        <Header />
        <AlgoSort />
      </>
    ),
  },
  {
    path: "/searching",
    element: (
      <>
        <Header />
        <AlgoSort />
      </>
    ),
  },
  {
    path: "/graph",
    element: (
      <>
        <Header />
        <AlgoSort />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
