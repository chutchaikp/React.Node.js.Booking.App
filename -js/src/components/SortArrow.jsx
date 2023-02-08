import React from 'react';

import { AiOutlineDownSquare, AiOutlineUpSquare } from 'react-icons/ai';

import './sortArrow.scss';

const SortArrow = ({ column, sort }) => {
  // console.log('rendering SortArrow', column, sort);
  return (
    <div className="sortArrow">
      <div className="container">
        {column === sort?.by ? (
          <>
            {sort.direction === 'a' ? (
              <AiOutlineDownSquare size={35} />
            ) : (
              <AiOutlineUpSquare size={35} />
            )}
          </>
        ) : (
          <>
            <div className="forHover">
              <AiOutlineDownSquare size={35} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(SortArrow);
