import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS_PER_PAGE } from "../../constantes/constantes";
// import Icon from "../../assets/Icon/Icon";

import { changePage } from "../../redux/actions";
import "./Pagination2.css";

export const Pagination2 = ({ arrayItems, handler }) => {
  let totalPages = Math.ceil(arrayItems.length / ITEMS_PER_PAGE);
  const dispatch = useDispatch();
  const [nroPage, setNroPage] = useState(0);
  let pageNumbers = [];

  let lastIndex = nroPage * ITEMS_PER_PAGE;
  let firstIndex = lastIndex - ITEMS_PER_PAGE;
  let items = arrayItems.slice(firstIndex, lastIndex);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    handler(items);
  }, [nroPage]);
  useEffect(() => {
    setNroPage(1);
  }, [arrayItems]);

  const onClick = (e) => {
    let target = parseInt(e.target.value);
    if (target <= totalPages && target >= 1) {
       setNroPage(target);
    }
  };

  return (
    <div className="pagination">
      {totalPages > 2 && nroPage !== 1 ? (
        <button
          className="page_btn"
          value={nroPage - 1}
          onClick={onClick}
          disabled={nroPage === 1}
        >
          prev
        </button>
      ) : (
        <> </>
      )}
      {totalPages > 1 ? (
        pageNumbers.map((item) => (
          <button
            key={item}
            className={`page_btn ${nroPage === item ? "page_btn_active" : ""}`}
            value={item}
            onClick={onClick}
          >
            {item}
          </button>
        ))
      ) : (
        <> </>
      )}
      {totalPages > 2 && nroPage !== totalPages ? (
        <button className="page_btn" value={nroPage + 1} onClick={onClick}>
          next
        </button>
      ) : (
        <> </>
      )}
    </div>
  );
};
