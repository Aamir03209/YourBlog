import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {isLoading,blogs,error}=useFetch("http://localhost:3001/blogs")
    return (
    <>
      <div className="home">
        {error&& <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList data={blogs} title="All Blogs!" />}
      </div>
    </>
  );
};

export default Home;
