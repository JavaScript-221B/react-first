import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DayList(){
  const days = useFetch('http://localhost:3003/days');
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