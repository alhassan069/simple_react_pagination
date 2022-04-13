const posts = [
  {
    id: "1",
    name: "Aaron Miles",
    email: "aaron@mailinator.com",
    role: "member",
  },
  {
    id: "2",
    name: "Aishwarya Naik",
    email: "aishwarya@mailinator.com",
    role: "member",
  },
  {
    id: "3",
    name: "Arvind Kumar",
    email: "arvind@mailinator.com",
    role: "admin",
  },
  {
    id: "4",
    name: "Caterina Binotto",
    email: "caterina@mailinator.com",
    role: "member",
  },
];
// const filterUsers = (searchTerm, posts) => {
//   const filteredPosts = posts.filter(
//     posts.name.includes(searchTerm) ||
//       posts.email.includes(searchTerm) ||
//       posts.role.includes(searchTerm)
//   );
//   console.log(filteredPosts);
// };
const incL = (post) => {
  post.role.includes("member");
};

let print = (searchTerm) =>
  posts.filter((obj) => {
    return (
      obj.name.includes(searchTerm) ||
      obj.email.includes(searchTerm) ||
      obj.role.includes(searchTerm)
    );
  });

console.log(print("member"));
