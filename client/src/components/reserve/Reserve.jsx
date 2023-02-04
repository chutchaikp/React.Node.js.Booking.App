import { AiOutlineClose } from 'react-icons/ai';
import './reserve.scss';
const Reserve = ({ setOpenModal, hotelId }) => {
  return (
    <div className="reserve">
      <div className="wrapper">
        <div className="close">
          <AiOutlineClose />
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates
          fugit tempore. Recusandae eveniet dicta eius minima omnis nulla amet
          eaque corporis optio facere. Consectetur impedit voluptates beatae hic
          vero!
        </div>
      </div>
    </div>
  );
};
export default Reserve;
