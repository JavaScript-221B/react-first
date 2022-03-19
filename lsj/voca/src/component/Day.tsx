import { useParams } from 'react-router-dom';
import Word, { IWord } from './Word';
import useFetch from '../hooks/useFetch';


function Day(){
  const { day } = useParams<{ day: string }>();
  const words: IWord[] = useFetch(`http://localhost:3003/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && (<span>Loading...</span>)}
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