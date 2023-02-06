import { useState } from 'react';
import useFetch from '../hook/useFetch';
import './user.scss';
const User = () => {
  const { data, loading, error } = useFetch(`/user`);
  // const [columns, setColumns] = useState([]);
  let columns = [];
  let customData = [];

  console.log(data);

  if (!data || data.length === 0) {
    return <>...</>;
  } else {
    // other
    customData = data.map((d) => {
      const { _id, password, createdAt, updatedAt, ...other } = d;
      return { ...other };
    });

    customData = customData.map((d) => {
      return { ...d, isAdmin: d.isAdmin ? 'ADMIN' : 'NOT ADMIN' };
    });

    debugger;
    const user = customData[0];
    columns = Object.keys(user);
  }

  return (
    <div className="user">
      <h1> User </h1>
      {loading ? (
        <>Loading...</>
      ) : (
        <div className="data">
          <table>
            <tr className="header">
              {Object.keys(customData[0]).map((k, idx) => {
                return (
                  <td className="title" key={idx}>
                    {k}
                  </td>
                );
              })}
            </tr>

            {customData.map((r, idx) => {
              debugger;
              return (
                <tr key={'r' + idx}>
                  {columns.map((c, idx) => {
                    return <td key={'c' + idx}>{r[c]}</td>;
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};
export default User;
