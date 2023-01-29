import {
  FaBed,
  FaCalendarDay,
  FaCar,
  FaPersonBooth,
  FaPlane,
  FaTwitter,
  FaTwitterSquare,
} from 'react-icons/fa';
import { ImMan } from 'react-icons/im';

import React, { useState } from 'react';

import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.scss';
import { useLocation } from 'react-router-dom';

const Header = () => {
  debugger;

  const location = useLocation();

  debugger;
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    // e.preventDefault();
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // if (location.pathname.endsWith('list')) {
  //   return <></>;
  // }

  return (
    <div className="header">
      <div className="items">
        <div className="item active">
          <FaBed />
          Stays
        </div>
        <div className="item">
          <FaPlane />
          Flights
        </div>
        <div className="item">
          <FaCar />
          Car rentals
        </div>
      </div>

      {!location.pathname.endsWith('list') && (
        <>
          <div className="title">A lifetime of discounts? It's Genius.</div>
          <p className="desc">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with afree Devbooking accounnt
          </p>

          <button className="btn">Sign in / Register</button>

          <div className="search">
            <div className="item">
              <FaBed />
              <input type="text" placeholder="Whaere are you going?" />
            </div>

            <div className="item">
              <FaCalendarDay />
              <span onClick={() => setOpenDate(!openDate)}>
                date to date {format(date[0].startDate, 'MM/dd/yyyy')} -{' '}
                {format(date[0].endDate, 'MM/dd/yyyy')}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                ></DateRange>
              )}
            </div>

            <div className="item">
              <span
                className="result"
                onClick={() => setOpenOptions(!openOptions)}
              >
                <ImMan />
                <span>{options.adult} adults</span>
                <span>{options.children} children</span>
                <span>{options.room} room</span>
              </span>

              {openOptions && (
                <div className="options">
                  <div className="option">
                    <div className="title">Adult</div>
                    <div>
                      <button
                        disabled={options.adult <= 1}
                        onClick={() => handleOption('adult', 'd')}
                      >
                        -
                      </button>
                      <span className="counter">{options.adult}</span>
                      <button onClick={() => handleOption('adult', 'i')}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="option">
                    <div className="title">Children</div>
                    <div>
                      <button
                        disabled={options.children <= 0}
                        onClick={() => handleOption('children', 'd')}
                      >
                        -
                      </button>
                      <span className="counter">{options.children}</span>
                      <button onClick={() => handleOption('children', 'i')}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="option">
                    <div className="title">Room</div>
                    <div>
                      <button
                        disabled={options.room <= 1}
                        onClick={() => handleOption('room', 'd')}
                      >
                        -
                      </button>
                      <span className="counter">{options.room}</span>
                      <button onClick={() => handleOption('room', 'i')}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="btn-search">SEARCH</button>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
