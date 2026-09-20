// import { Children, useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import NotFound from "./pages/Notfuond/NotFound";
import SingleBlog from "./pages/blogs/SingelBlog/SingleBlog";

const routers = createBrowserRouter([
  // {
  //   Path: "",
  //   element: <Layout />,
  //   Children: [
  //     { index: true, element: <Home /> },
  //     { path: "home", element: <Home /> },
  //     { path: "blogs", element: <Blogs /> },
  //     { path: "about", element: <About /> },
  //   ],
  // },
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "about", element: <About /> },
      {
        path: "blogs/:slug",
        element: <SingleBlog />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>;
    </>
  );
}

export default App;
