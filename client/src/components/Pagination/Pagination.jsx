import { useDispatch, useSelector } from "react-redux";
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
    <nav className="pagination">
      <button className="page-item" value={currentPage - 1} onClick={onClick}>
        prev
      </button>
      {pageNumbers.map((item) => (
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
