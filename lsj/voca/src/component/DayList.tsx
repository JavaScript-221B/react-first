import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export interface IDay {
  id: number;
  day: number;
}

function DayList(){
  const days: IDay[] = useFetch('http://localhost:3003/days');

  if(days.length === 0){
    return <span>Loading...</span>
  }
  return (
    <ul className="listDay">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>
            <button>Day {day.day}</button>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DayList;