import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DayList(){
  const [days, setDays] = useState([]);

  // async await
  const fetchDays = async () => {
    const res = await fetch('http://localhost:3003/days');
    const json = await res.json();
    setDays(json);
  }

  useEffect(() => {
    fetchDays()
  }, [])

  // then chaining
  // useEffect(() => {
  //   console.log('change');
  //   fetch('http://localhost:3003/days')
  //     .then(res => res.json())
  //     .then(data => {
  //       setDays(data);
  //     })
  //   console.log(days)
  // }, []);

  return (
    <ul className="listDay">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>
            Day {day.day}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DayList;