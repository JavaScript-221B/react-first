import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';

function Day(){
  const { day } = useParams();
  // const wordList = dummy.words.filter(word => word.day === Number(day));
  const [words, setWords] = useState([]);

  const fetchWords = async (day) => {
    const res = await fetch(`http://localhost:3003/words?day=${day}`);
    const data = await res.json();
    setWords(data);
  }

  useEffect(() => {
    fetchWords(day);
  }, [day])

  // useEffect(() => {
  //   fetch(`http://localhost:3003/words?day=${day}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setWords(data);
  //     })
  // }, [day])

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}></Word>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Day;