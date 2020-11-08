import React from 'react';
import { connect } from 'react-redux';

import { nextPage } from '../../redux/actions/serchActions';
import './Pagination.scss';

const Pagination = ({
   pages,
   currentPage,
   nextPage,
   movieName,
   totalResults,
}) => {

   // for (let i = 1; i < pages + 1; i++) {
   //    let active = currentPage === i ? 'active' : '';

   //    pageLinks.push(
   //       <li
   //          className={active}
   //          key={i}
   //          onClick={() => nextPage(movieName, i)}
   //       >
   //          {i}
   //       </li>,
   //    );
   // }

   const startBtns = [currentPage, currentPage + 1, currentPage + 2];
   const gapBtns = [currentPage - 2, currentPage - 1, currentPage];
   const middleBtns = ['...'];
   const lastBtns = [pages - 2, pages - 1, pages];

   let btnsArr = [];

   if (currentPage < pages - 5) {
      btnsArr = [...startBtns, ...middleBtns, ...lastBtns];
   } else if (currentPage < pages - 3) {
      btnsArr = [...gapBtns, ...middleBtns, ...lastBtns];
   } else if (currentPage < pages - 2) {
      btnsArr = [...gapBtns, ...lastBtns];
   } else {
      btnsArr = [...middleBtns, ...lastBtns];
   }

   return (
      <div className='pagination'>
         <ul>
            {currentPage > 1 ? (
               <li onClick={() => nextPage(movieName, currentPage - 1)}>
                  {'<'}
               </li>
            ) : (
               ''
            )}
            {btnsArr.map((btn) => (
               <li
                  key={btn}
                  onClick = {btn === '...' ? null : () => nextPage(movieName, btn)}
                  className={currentPage === btn ? 'active' : ''}
               >
                  {btn}
               </li>
            ))}
            {currentPage < pages  ? (
               <li onClick={() => nextPage(movieName, currentPage + 1)}>
                  {'>'}
               </li>
            ) : (
               ''
            )}
         </ul>
      </div>
   );
};

const mapStateToProps = (state) => ({
   currentPage: state.search.currentPage,
   movieName: state.search.inputValue,
   totalResults: state.search.totalResults,
});

export default connect(mapStateToProps, { nextPage })(Pagination);
