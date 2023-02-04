import useFetch from '../../hook/useFetch';
import './featuredProperties.scss';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotel?featured=true&limit=3');
  console.log(data);

  return (
    <div className="featuredProperties">
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          {data.map((d, idx) => (
            <div key={idx} className="item">
              <img
                src={
                  d.photos[0] ||
                  'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
                }
                alt=""
                className="fpImg"
              />
              <span className="name">{d.name}</span>
              <span className="city">{d.city}</span>
              <span className="price">Starting from ${d.cheapestPrice}</span>
              {d.raging && (
                <div className="rating">
                  <button>{d?.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {/* <div className="item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="name">Aparthotel Stare Miasto</span>
        <span className="city">Madrid</span>
        <span className="price">Starting from $120</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="name">Comfort Suites Airport</span>
        <span className="city">Austin</span>
        <span className="price">Starting from $140</span>
        <div className="rating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="name">Four Seasons Hotel</span>
        <span className="city">Lisbon</span>
        <span className="price">Starting from $99</span>
        <div className="rating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="name">Hilton Garden Inn</span>
        <span className="city">Berlin</span>
        <span className="price">Starting from $105</span>
        <div className="rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedProperties;
