// import './searchResult.scss';
// const SearchResult = () => {
//   return (
//     <div className="searchResult">
//       <h1> SearchResult </h1>
//     </div>
//   );
// };
// export default SearchResult;

import { Link } from 'react-router-dom';
import './searchResult.scss';

const SearchResult = ({ item }) => {
  return (
    <div className="searchResult">
      <div className="img">
        <img src={item.photos[0]} alt="" className="" />
      </div>
      <div className="desc">
        <h1 className="title">{item.title}</h1>
        <span className="distance">{item.distance}m from center</span>
        <span className="taxiOp">Free airport taxi</span>
        <span className="subtitle">Studio Apartment with Air conditioning</span>
        <span className="features">
          {/* Entire studio • 1 bathroom • 21m² 1 full bed */}
          {item.desc}
        </span>
        <span className="cancelOp">Free cancellation </span>
        <span className="cancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="details">
        {item.rating && (
          <div className="rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="detailTexts">
          <span className="price">${item.cheapestPrice}</span>
          <span className="taxOp">Includes taxes and fees</span>
          <Link to={`/hotel/${item._id}`}>
            <button className="checkButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
