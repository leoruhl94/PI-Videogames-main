// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Icon from "../../assets/Icon/Icon";

import { changePage } from "../../redux/actions";
import './Pagination.css'


export const Pagination = () => {
  const [totalPages, currentPage ]= useSelector((state) => [state.totalPages, state.currentPage]);
  const dispatch = useDispatch();
  let pageNumbers = [];

  


  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const onClick = (e) => {
    let target = parseInt(e.target.value);
    if ( target <= totalPages && target >= 1) {
      dispatch(changePage(target));
    }
  };
  

  return (
    <div className="pagination">
     { 
     (totalPages > 2 && currentPage !== 1 )? 
     <button className="page_btn" value={currentPage - 1} onClick={onClick} disabled={currentPage===1}>
          prev
      </button>
      : <>{" "}</>
      }
      {totalPages > 1 ? pageNumbers.map((item) => (
        <button key={item} className={`page_btn ${currentPage === item ? 'page_btn_active' : '' }`} value={item} onClick={onClick} >
          {item}
        </button>
      ))
      : <>{" "}</>}
           { 
     (totalPages > 1 && currentPage !== totalPages ) ? 
     <button className="page_btn" value={currentPage + 1} onClick={onClick} >
          next
      </button>
      : <>{" "}</>
      }

    </div>
  );
};
