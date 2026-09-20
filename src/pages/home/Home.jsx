// import React from "react";
import Hero from "./Hero/Hero";
import ShortBlog from "./shortblogs/ShortBlog";
import FeaturedArticles from "./../../components/FeaturedArticles/FeaturedArticles";
import Category from "./Category/Category";
import LatestArticles from "./../../components/LatestArticles/LatestArticles";
import Newsletter from "./Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <ShortBlog />
      <Category />
      <LatestArticles />
      <Newsletter />
    </>
  );
}
