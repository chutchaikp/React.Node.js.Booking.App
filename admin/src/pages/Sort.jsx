import { useEffect, useState } from 'react';
import SortArrow from '../components/SortArrow';
import './sort.scss';

// import Down from '../imgs/Down.svg';
// import { ReactComponent as Down } from '../imgs/Down.svg';

const Sort = () => {
  const [sort, setSort] = useState(null);
  // { by: 'b', direction: 'a' }

  useEffect(() => {
    console.log(sort);
  }, [sort]);

  const handleSort = (by) => {
    setSort((prev) => {
      if (prev && prev.by === by) {
        return { ...prev, direction: prev.direction === 'a' ? 'd' : 'a' };
      }
      return { by, direction: 'a' };
    });
  };

  return (
    <div className="sort">
      <div className="wrapper">
        {/* <div className="item">
          <input type="checkbox" id="check1" />
          <label htmlFor="check1"> Sort A </label>
        </div> */}

        <div className="item2">
          <label className="title" onClick={() => handleSort('a')}>
            Sort A
            <SortArrow column={'a'} sort={sort} />
          </label>
        </div>

        <div className="item2">
          <label className="title" onClick={() => handleSort('b')}>
            Sort B
            <SortArrow column={'b'} sort={sort} />
          </label>
        </div>
        <div className="item2">
          <label className="title" onClick={() => handleSort('c')}>
            Sort C
            <SortArrow column={'c'} sort={sort} />
          </label>
        </div>

        <div className="item2">
          <label className="title" onClick={() => handleSort('d')}>
            Sort D
            <SortArrow column={'d'} sort={sort} />
          </label>
        </div>

        <div className="item2">
          <label className="title" onClick={() => handleSort('e')}>
            Sort E
            <SortArrow column={'e'} sort={sort} />
          </label>
        </div>
      </div>
    </div>
  );
};
export default Sort;
