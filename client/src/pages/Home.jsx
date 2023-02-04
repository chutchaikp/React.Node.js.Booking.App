import Featured from '../components/featured/Featured';
import PropertyList from '../components/propertyList/PropertyList';
import FeatureProperties from '../components/featuredProperties/FeaturedProperties';
import './home.scss';
import MailList from '../components/mailList/MailList';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Featured />
        <h1 className="title">Browse by property type</h1>
        <PropertyList />
        <h1 className="title">Homes guests love</h1>
        <FeatureProperties />
      </div>

      <MailList />
    </div>
  );
};
export default Home;
