import { useState } from 'react';

const Hello = function() {
  const [name, setName] = useState('Mike');

  function changeName() {
    setName(name === 'Mike' ? 'Jane' : "Mike");
  }
  
  return (
    <div>
      <h1>state</h1>
      <h2>{name}</h2>
      <button onClick={changeName}>Change</button>

    </div>
  );
}

export default Hello;
