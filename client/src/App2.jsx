import Featured from './components/featured/Featured';
import PropertyList from './components/propertyList/PropertyList';
import useFetch from './hook/useFetch';

const App2 = () => {
  const { data, loading, error } = useFetch('/hotel/countByType');

  // debugger;
  console.log(data);

  return (
    <div className="app2">
      <h1> App2 </h1>

      {/* <Featured />
      <hr /> */}
      <PropertyList />
      <hr />
    </div>
  );
};
export default App2;
