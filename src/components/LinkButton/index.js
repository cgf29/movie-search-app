import React from 'react';
import { NavLink } from 'react-router-dom';

import './LinkButton.scss';

const LinkButton = ({ to, title }) => {
   return (
      <div className='btn'>
         <NavLink exact to={to}>
            {title}
         </NavLink>
      </div>
   );
};

export default LinkButton;
