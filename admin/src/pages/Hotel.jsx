import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SortArrow from '../components/SortArrow';
import useFetch from '../hook/useFetch';

import './hotel.scss';

const Hotel = () => {
  const navigate = useNavigate();
  const [customData, setCustomData] = useState([]);
  const [sort, setSort] = useState({ by: 'id', direction: 'a' });
  const [columns, setColumns] = useState([]);

  const { data, loading, error } = useFetch('/Hotel');

  useEffect(() => {
    try {
      if (data && data.length > 0) {
        const res = data.map((d) => {
          const {
            rooms,
            updatedDate,
            updatedAt,
            featured,
            cheapestPrice,
            photos,
            __v,
            ...other
          } = d;
          return { ...other };
        });

        const hideCols = ['_id', 'distance'];
        const cols = Object.keys(res[0]).map((c) => {
          if (hideCols.indexOf(c) >= 0) {
            return { name: c, isShow: false };
          } else {
            return { name: c, isShow: true };
          }
        });
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

  const handleDelete = async (Hotelname) => {
    try {
      debugger;
      const res = await axios.delete('/Hotel/Hotelname/' + Hotelname);
      console.log('remove', res);
      setCustomData((prev) => {
        return prev.filter((o) => o.Hotelname !== Hotelname);
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
    <div className="hotel">
      <div className="header">
        <h2> Hotel {JSON.stringify(sort)} </h2>
        <button onClick={() => navigate('/hotelcreate')}>ADD NEW</button>
      </div>

      {customData && customData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                {columns.map((c) => {
                  return (
                    <td
                      className={c.isShow ? 'title show' : 'hide'}
                      key={'c' + c.name}
                    >
                      <div
                        className="titleColumn"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSort(c.name);
                        }}
                      >
                        <div className="wrapper">
                          <span className="columnName">{c.name}</span>
                          <span className={sort?.by === c.name ? '' : 'arrow'}>
                            <SortArrow column={c.name} sort={sort} />
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
                      const key = 'x' + c.name + idx;
                      return (
                        <td
                          className={c.isShow ? '' : 'hide'}
                          name={key}
                          key={key}
                        >
                          {u[c.name]}
                        </td>
                      );
                    })}

                    {/* actions */}
                    <td>
                      <button onClick={() => alert(u._id)}>VIEW</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(u.Hotelname)}>
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
export default React.memo(Hotel);
