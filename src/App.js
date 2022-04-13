import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [tempPosts, setTempPosts] = useState(posts);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setPosts(res.data);
      setTempPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tempPosts.slice(indexOfFirstPost, indexOfLastPost);

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // search bar
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // filter users using search term
  const filterUsers = (searchTerm, posts) => {
    const filteredPosts = posts.filter((post) => {
      return (
        post.name.includes(searchTerm) ||
        post.email.includes(searchTerm) ||
        post.role.includes(searchTerm)
      );
    });
    setTempPosts(filteredPosts);
  };

  // delete an object
  const deleteItem = (id) => {
    const restPosts = posts.filter((post) => post.id !== id);
    setPosts(restPosts);
    setTempPosts(restPosts);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3"> My Blog </h1>{" "}
      <input type="text" onChange={handleChange} />
      <button onClick={() => filterUsers(searchTerm, posts)}>Search</button>
      <Posts
        posts={currentPosts}
        loading={loading}
        deleteItem={deleteItem}
      />{" "}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={tempPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />{" "}
    </div>
  );
};

export default App;
