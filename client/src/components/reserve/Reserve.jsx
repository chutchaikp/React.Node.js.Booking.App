import { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import useFetch from '../../hook/useFetch';
import { SearchContext } from '../../context/SearchContext';
import './reserve.scss';

const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error, dispatch } = useFetch(
    `/hotel/room/getHotelRoom/${hotelId}`
  );

  const handleSelect = (e) => {
    // e.preventDefault();
    const isSelected = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      isSelected
        ? [...selectedRooms, value]
        : selectedRooms.filter((s) => s !== value)
    );
  };

  const { dates } = useContext(SearchContext);
  const handleReserveNow = (e) => {
    e.preventDefault();
    debugger;
  };

  console.log(selectedRooms);

  return (
    <div className="reserve">
      <div className="wrapper">
        <div className="close">
          <AiOutlineClose />
        </div>

        <span>Select your rooms:</span>

        {data.map((item, idx) => (
          <>
            <div className="item" key={idx}>
              <div className="info">
                <div className="title"> {item.title} </div>
                <div className="desc"> {item.desc} </div>
                <div className="max"> Max people {item.maxPeople} </div>
                <div className="price">{item.price}</div>
              </div>

              {item.roomNumbers.map((rn) => (
                <div className="room" key={rn._id}>
                  <label>{rn.number}</label>
                  <input
                    type="checkbox"
                    value={rn._id}
                    onChange={handleSelect}
                  />
                </div>
              ))}
            </div>
          </>
        ))}

        <button onClick={handleReserveNow} className="r-button">
          Reserver Now!
        </button>
      </div>
    </div>
  );
};
export default Reserve;
