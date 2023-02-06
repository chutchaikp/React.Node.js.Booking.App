import { AiFillCaretDown } from 'react-icons/ai';

import './showHide.scss';
const ShowHide = () => {
  return (
    <div className="showHide">
      <div className="btn">SHOW/HIDE</div>
      <label htmlFor="">
        <AiFillCaretDown />
      </label>

      <label htmlFor="">
        <AiFillCaretDown />
      </label>

      <label htmlFor="">
        <AiFillCaretDown />
      </label>

      <label htmlFor="">
        <AiFillCaretDown />
      </label>

      <div className="nextSib">Hello CCS</div>
    </div>
  );
};
export default ShowHide;
