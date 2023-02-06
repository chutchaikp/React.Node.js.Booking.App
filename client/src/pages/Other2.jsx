import { useState } from 'react';
import './other2.scss';
const Other2 = () => {
  const [name, setName] = useState('');

  const [auth, setAuth] = useState(undefined);

  return (
    <div className="other2">
      <h1> Other2 </h1>
    </div>
  );
};
export default Other2;
