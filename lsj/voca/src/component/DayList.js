import dummy from '../db/data.json';

function DayList(){
  console.log(dummy);
  return (
    <ul className="listDay">
      {dummy.days.map(day => (
        <li key={day.id}>
          Day {day.day}
        </li>
      ))}
    </ul>
  )
}

export default DayList;