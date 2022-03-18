import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

function Day(){
  const { day } = useParams();
  const words = useFetch(`http://localhost:3003/words?day=${day}`);

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