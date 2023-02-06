import { useEffect, useState } from 'react';
import SortArrow from '../components/SortArrow';
import useFetch from '../hooks/useFetch';

import './user.scss';

const User = () => {
  const { data, loading, error, refresh } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const [customData, setCustomData] = useState([]);
  const [sort, setSort] = useState({}); // { by, direction }
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    try {
      if (data && data.length > 0) {
        const res = data.map((d) => {
          const { address, company, ...other } = d;
          return { ...other };
        });

        const cols = Object.keys(res[0]);
        setColumns(cols);
        setCustomData(res);
      }
    } catch (error) {
      throw error;
    }
  }, [data, loading, error]);

  useEffect(() => {
    // const res = customData.sort((a, b) => {
    //   if (sort.direction === 'a') {
    //     return b[sort.by] - a[sort.by];
    //   } else {
    //     return a[sort.by] - b[sort.by];
    //   }
    // });

    // customData.sort((a, b) => {
    //   try {
    //     // if (sort.direction === 'a') {
    //     //   return b[sort.by] > a[sort.by] ? -1 : 1;
    //     // } else {
    //     //   return a[sort.by] > b[sort.by] ? -1 : 1;
    //     // }

    //     // var keyA = a[sort.by];
    //     // var keyB = b[sort.by];

    //     // if (keyA < keyB) return -1;
    //     // if (keyA > keyB) return 1;

    //     // return 0;
    //   } catch (error) {
    //     throw error;
    //   }
    // });

    const sorted = customData.sort((a, b) => {
      // if (sort.direction === 'a') {
      //   return b[sort.by] - a[sort.by];
      // } else {
      //   return a[sort.by] - b[sort.by];
      // }

      if (sort.direction === 'a') {
        return b[sort.by] > a[sort.by] ? -1 : 1;
      } else {
        return a[sort.by] > b[sort.by] ? -1 : 1;
      }
    });

    setCustomData(sorted);
  }, [sort, customData]);

  const handleSort = (by) => {
    try {
      setSort((prev) => {
        if (prev && prev.by === by) {
          return { ...prev, direction: prev.direction === 'a' ? 'd' : 'a' };
        }
        return { by, direction: 'a' };
      });

      // debugger;

      // const res = customData.sort((a, b) => {
      //   return b[by] - a[by];
      // });

      // setCustomData(res);
    } catch (error) {
      debugger;
    }
  };

  if (error) {
    return <div className="user error">{error.message}</div>;
  }

  return (
    <div className="user">
      <h1> User {JSON.stringify(sort)} </h1>
      {customData && customData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                {columns.map((c) => {
                  return (
                    <td className="title" key={'c' + c}>
                      <div
                        className="titleColumn"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSort(c);
                        }}
                      >
                        <div className="wrapper">
                          <span className="columnName">{c}</span>
                          <span className={sort?.by === c ? '' : 'arrow'}>
                            <SortArrow column={c} sort={sort} />
                          </span>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {customData.map((u) => {
                return (
                  <tr key={u.id}>
                    {columns.map((c) => {
                      return <td key={'x' + c + u.id}>{u[c]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};
export default User;
