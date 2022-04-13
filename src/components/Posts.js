import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const Posts = ({ posts, loading, deleteItem }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <>
            <tr key={post.id + post.name}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{post.name}</td>
              <td>{post.email}</td>
              <td>{post.role}</td>
              <td>
                <button onClick={() => deleteItem(post.id)}>
                  <BiEdit />
                </button>
                <button onClick={() => deleteItem(post.id)}>
                  <MdOutlineDelete color="red" />
                </button>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
