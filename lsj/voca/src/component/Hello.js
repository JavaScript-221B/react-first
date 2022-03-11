import { useState } from 'react';
import UserName from './UserName';

const Hello = function({ age }) {
  const [name, setName] = useState('Mike');
  const msg = age > 19 ? '성인' : '미성년자';

  function changeName() {
    setName(name === 'Mike' ? 'Jane' : "Mike");
  }

  return (
    <div>
      <h1>state</h1>
      <h2>{name} ({age}세) : {msg}</h2>
      <UserName name={name}/>
      <button
        onClick={() => {
            changeName()
          }
        }
      >
        Change
      </button>

    </div>
  );
}

export default Hello;
