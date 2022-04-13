import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPageNumber = pageNumbers[pageNumbers.length - 1];

  return (
    <>
      <button>Delete All</button>
      <nav className="ml-5 pl-5">
        <ul className="pagination">
          <li className="page-item">
            <a onClick={() => paginate(1)} href="!#" className="page-link">
              {"<<"}
            </a>
          </li>
          <li className="page-item">
            <a
              onClick={() => {
                currentPage === 1 ? paginate(1) : paginate(currentPage - 1);
              }}
              href="!#"
              className="page-link"
            >
              {"<"}
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className={
                  currentPage === number ? "page-link bg-warning" : "page-link"
                }
              >
                {number}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              onClick={() => {
                currentPage === lastPageNumber
                  ? paginate(lastPageNumber)
                  : paginate(currentPage + 1);
              }}
              href="!#"
              className="page-link"
            >
              {">"}
            </a>
          </li>
          <li className="page-item">
            <a
              onClick={() => paginate(lastPageNumber)}
              href="!#"
              className="page-link"
            >
              {">>"}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
