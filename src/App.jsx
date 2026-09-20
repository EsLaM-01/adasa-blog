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

const routers = createBrowserRouter(
  [
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
  ],
  {
    basename: "/adasa-blog",
  },
);
function App() {
  return <RouterProvider router={routers} />;
}

export default App;
