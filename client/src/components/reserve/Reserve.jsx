import { AiOutlineClose } from 'react-icons/ai';
import useFetch from '../../hook/useFetch';
import './reserve.scss';

const Reserve = ({ setOpenModal, hotelId }) => {
  debugger;

  useStatexxx;

  const { data, loading, error, dispatch } = useFetch(
    `/hotel/room/getHotelRoom/${hotelId}`
  );

  const handleSelect = (e) => {
    e.preventDefault();
    setSel;
  };

  return (
    <div className="reserve">
      <div className="wrapper">
        <div className="close">
          <AiOutlineClose />
        </div>

        <span>Select your rooms:</span>

        {data.map((item) => (
          <>
            <div className="item">
              <div className="info">
                <div className="title"> {item.title} </div>
                <div className="desc"> {item.desc} </div>
                <div className="max"> Max people {item.maxPeople} </div>
                <div className="price">{item.price}</div>
              </div>

              {item.roomNumbers.map((rn) => (
                <>
                  <div className="room">
                    <label>{rn.number}</label>
                    <input
                      type="checkbox"
                      value={rn._id}
                      onChange={handleSelect}
                    />
                  </div>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Reserve;
