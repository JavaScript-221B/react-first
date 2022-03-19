import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch"

export default function CreateWord(){
  const days = useFetch('http://localhost:3003/days');
  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault();
    
    fetch(`http://localhost:3003/words/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      })
    })
      .then(res => {
        if(res.ok) {
          alert('생성 완료!');
          navigate(`/day/${dayRef.current.value}`)
        }
      })
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="">Eng</label>
        <input type="text" placeholder="computer" ref={engRef}/>
      </div>
      <div className="input_area">
        <label htmlFor="">Kor</label>
        <input type="text" placeholder="컴퓨타" ref={korRef}/>

      </div>
      <div className="input_area">
        <label htmlFor="">Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  )
}