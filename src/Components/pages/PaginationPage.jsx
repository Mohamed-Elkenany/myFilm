import React from 'react';
import ReactPaginate from 'react-paginate';
const PigenationPage = ({changePage, numberOfPage}) => {
  const handlePageClick = (data) => {
  changePage(data.selected + 1 )
}
  return (
    <ReactPaginate
        breakLabel="..."
      breakLinkClassName={"page-link"}
        nextLabel="next >"
      nextLinkClassName={"page-link"}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        pageCount={numberOfPage}
        previousLabel="< previous"
      previousLinkClassName={"page-link"}
      renderOnZeroPageCount={null}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      activeClassName={"active"}
      />
  );
}

export default PigenationPage;
