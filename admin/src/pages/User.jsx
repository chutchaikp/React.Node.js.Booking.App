import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SortArrow from '../components/SortArrow';
import useFetch from '../hook/useFetch';

import './user.scss';

const User = () => {
  const navigate = useNavigate();
  const [customData, setCustomData] = useState([]);
  const [sort, setSort] = useState({ by: 'id', direction: 'a' });
  const [columns, setColumns] = useState([]);

  const { data, loading, error } = useFetch('/user');

  useEffect(() => {
    try {
      if (data && data.length > 0) {
        const res = data.map((d) => {
          const { _id, password, createdAt, updatedAt, __v, ...other } = d;
          return { ...other, isAdmin: other.isAdmin ? 'admin' : 'user' };
        });

        const cols = Object.keys(res[0]);
        setColumns(cols);
        setCustomData(res);
      }
    } catch (error) {
      throw error;
    }
  }, [data]);

  const handleSort = (by) => {
    try {
      let sortDirection = 'a';
      if (sort && sort.by === by) {
        sortDirection = sort.direction === 'a' ? 'd' : 'a';
      } else {
        sortDirection = 'a';
      }
      setSort({ by, direction: sortDirection });

      setCustomData((prev) => {
        const sorted = prev.sort((a, b) => {
          if (sortDirection === 'a') {
            return b[by] > a[by] ? -1 : 1;
          } else {
            return a[by] > b[by] ? -1 : 1;
          }
        });
        return sorted;
      });
    } catch (error) {
      debugger;
    }
  };

  const handleDelete = async (username) => {
    try {
      debugger;
      const res = await axios.delete('/user/username/' + username);
      console.log('remove', res);
      setCustomData((prev) => {
        return prev.filter((o) => o.username !== username);
      });
    } catch (error) {
      throw error;
    }
  };

  if (error) {
    debugger;
    return <>{error.message}</>;
  }

  return (
    <div className="user">
      <div className="header">
        <h2> User {JSON.stringify(sort)} </h2>
        <button onClick={() => navigate('/newuser')}>ADD NEW</button>
      </div>

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
              {customData.map((u, _idx) => {
                return (
                  <tr key={_idx}>
                    {columns.map((c, idx) => {
                      const key = 'x' + c + idx;
                      return (
                        <td name={key} key={key}>
                          {u[c]}
                        </td>
                      );
                    })}

                    {/* actions */}
                    <td>
                      <button>VIEW</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(u.username)}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={6}>
                  {JSON.stringify(sort)} - {Date.now().toString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};
export default React.memo(User);
