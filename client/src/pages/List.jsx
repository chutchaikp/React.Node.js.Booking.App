import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import SearchResult from '../components/searchResult/SearchResult';
import './list.scss';

const List = () => {
  const location = useLocation();
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const [destination, setDestination] = useState(location.state.destination);

  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);

  const { data, loading, error, reFetch } = useFetch(
    `/hotel?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    reFetch();
  };

  console.log(data);

  return (
    <div className="list-search">
      <div className="search">
        <h1 className="title">Search</h1>

        <div className="destination">
          <p>Desctination</p>
          <input type="text" placeholder="madid" value={destination} />
        </div>
        <div className="checking-date">
          <p>Check-in date</p>
          <span className="date-span" onClick={(e) => setOpenDate(!openDate)}>
            {`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
              dates[0].endDate,
              'MM/dd/yyyy'
            )} `}
          </span>

          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              minDate={new Date()}
              className="date"
            ></DateRange>
          )}
        </div>

        <div className="options">
          <div className="title">Options</div>
          <div className="option">
            <span>Min price (per night)</span>
            <input type="number" onChange={(e) => setMin(e.target.value)} />
          </div>
          <div className="option">
            <span>Max price (per night)</span>
            <input type="number" onChange={(e) => setMax(e.target.value)} />
          </div>
          <div className="option">
            <span>Adult</span>
            {/* <input type="number" min={1} value={options.adult || ''} onChange={e => handleCh} /> */}
            <input type="number" min={1} />
          </div>
          <div className="option">
            <span>Children</span>
            <input type="number" min={0} value={options.children || '0'} />
          </div>
          <div className="option">
            <span>Room</span>
            <input type="number" min={1} value={options.room || ''} />
          </div>
        </div>

        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="result">
        {loading ? (
          <>loading...</>
        ) : (
          <>
            {data.map((item, idx) => (
              <SearchResult key={idx} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default List;
