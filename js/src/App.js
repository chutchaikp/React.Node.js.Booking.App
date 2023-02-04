
// TODO: learn promise 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all


import axios from 'axios';
import useFetch from './hooks/useFetch';

function App() {

  const { data, loading, error, } = useFetch('/hotel/countByType')

  debugger;

  const handleClick = () => {

  }

  if (data) {
    console.log(data)
  }

  return (
    <div className="App">

      {/* <h1>        what is promise ?      </h1>

      <button onClick={() => handleGet()}>submit</button>
      <button onClick={() => handleGet2()}>GET 2</button> */}
    </div>
  );
}

export default App;
