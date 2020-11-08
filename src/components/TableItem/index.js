import React from 'react';

import './TableItem.scss';

const TableItem = ({ title, value }) => {
   return (
      <div className='table-item'>
         <span>{title}</span>
         <span>{value}</span>
      </div>
   );
};

export default TableItem;
