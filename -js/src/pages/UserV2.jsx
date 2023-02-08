import { useEffect, useState } from 'react';
import SortArrow from '../components/SortArrow';
import useFetch from '../hooks/useFetch';

import './userV2.scss';
const UserV2 = () => {
  // let columns = [];
  let customData = [];

  let sort = {};

  const [columns, setColumns] = useState([]);

  const { data, loading, error, refresh } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  // const { data, loading, error, refresh } = useFetch(
  //   'http://localhost:8800/api/hotel'
  // );

  useEffect(() => {
    console.log('useEffet', data.length);
    if (data && data.length > 0) {
      try {
        // console.log('useEffet', data.length);
        const cols = ['name'];
        setColumns(cols);
      } catch (error) {
        throw error;
      }
    }
  }, [data, loading, error]);

  // http://localhost:8800/api/hotel

  // try {
  //   if (data && data.length > 0) {
  //     // const res = data.map((d) => {
  //     //   const { address, company, ...other } = d;
  //     //   return { ...other };
  //     // });
  //     const res = data;

  //     const cols = Object.keys(res[0]);
  //     setColumns(cols);
  //     // setCustomData(res);

  //     // columns = cols;
  //     customData = res;
  //   }
  // } catch (error) {
  //   throw error;
  // }

  const handleSort = () => {};

  if (error) {
    return <div className="user error">{error.message}</div>;
  }

  // if (data && data.length > 0) {
  //   try {
  //     console.log(data.length);

  //     const cols = ['name'];
  //     setColumns(cols);
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  return <div>Data length .... {data?.length}</div>;
};
export default UserV2;
