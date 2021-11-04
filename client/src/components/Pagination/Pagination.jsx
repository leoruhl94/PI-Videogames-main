// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
import { changePage } from "../../redux/actions";
import './Pagination.css'


export const Pagination = () => {
  const [totalPages, currentPage ]= useSelector((state) => [state.totalPages, state.currentPage]);
  const dispatch = useDispatch();
  let pageNumbers = [];

  // const location = useLocation();
  // const [path, setPath] = useState('/')


  // useEffect(() => {
  //   const currentPath = location.pathname;
  //   setPath(currentPath.split('/')[2])
  //   console.log(currentPath.split('/')[2])
  // }, [location]);
  


  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // const onClick = (e) => {
  //   const currentPath = location.pathname;
  //   let target = parseInt(currentPath.split('/')[2]);
  //   if ( target <= totalPages && target >= 1) {
  //     dispatch(changePage(target));
  //   }
  // };
  const onClick = (e) => {
    let target = parseInt(e.target.value);
    if ( target <= totalPages && target >= 1) {
      dispatch(changePage(target));
    }
  };

  return (
    <nav className="pagination">
      <button className="page-item" value={currentPage - 1} onClick={onClick}>
        prev
      </button>
      {pageNumbers.map((item) => (
        // <Link key={item} to={`/home/${item}`} className="page-item" value={item} onClick={onClick}>
        //   {item}
        // </Link>
        <button key={item} className="page-item" value={item} onClick={onClick}>
          {item}
        </button>
      ))}
      <button className="page-item" value={currentPage + 1} onClick={onClick}>
        next
      </button>
    </nav>
  );
};
