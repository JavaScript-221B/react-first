import React from 'react';
import { useState } from 'react';

const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setisDone] = useState(word.isDone);

  function toggleShow(){
    setIsShow(prev => !prev);
  }
  function toggleDone(){
    // setisDone(prev => !prev);
    fetch(`http://localhost:3003/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone
      })
    })
      .then(res => {
        if(res.ok) {
          setisDone(prev => !prev)
        }
      })
  }
  function del(){
    if(window.confirm('삭제 하시겠습니까?')){
      fetch(`http://localhost:3003/words/${word.id}`, {
          method: 'DELETE'
      })
        .then(res => {
          if(res.ok){
            setWord({ id: 0 })
          }
        })
    }
  }

  if(word.id === 0){
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          뜻 {isShow ? '숨기기' : '보기'}
        </button>
        <button onClick={del} className="btn_del">삭제</button>
      </td>
    </tr>
  );
};

export default Word;