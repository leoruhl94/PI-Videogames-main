import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions";

export const Pagination = ({ itemsPerPage, totalItems }) => {
  const totalPages = useSelector((state) => state.totalPages);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  let pageNumbers = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pageNumbers.push(i);
  }
  const onClick = (e) => {
    let target = e.target.value;
    let newPage;
    if (typeof target === "number" && target !== currentPage) {
      newPage = target;
    }
    if (target === "prev" && currentPage > 1) {
      newPage = currentPage - 1;
    }
    if (target === "next" && currentPage < totalPages) {
      newPage = currentPage + 1;
    }
    dispatch(changePage(newPage));
  };

  return (
    <nav className="pagination">
      <button className="page-item" value={item} onClick={onClick}>
        prev
      </button>
      {pageNumbers.map((item) => (
        <button key={item} className="page-item" value={item} onClick={onClick}>
          {item }
        </button>
      ))}
      <button className="page-item" value={item} onClick={onClick} >
        next
      </button>
    </nav>
  );
};
