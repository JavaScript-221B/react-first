import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch"
import { IDay } from './DayList';

export default function CreateWord(){
  const days: IDay[] = useFetch('http://localhost:3003/days');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent){
    e.preventDefault();

    if(isLoading || !dayRef.current || !engRef.current || !korRef.current) return;
    
    setIsLoading(true);
    const day = dayRef.current.value;
    const eng = engRef.current.value;
    const kor = korRef.current.value;

    fetch(`http://localhost:3003/words/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day,
        eng,
        kor,
        isDone: false
      })
    })
      .then(res => {
        if(res.ok) {
          alert('생성 완료!');
          navigate(`/day/${day}`)
          setIsLoading(false);
        }
      })
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

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
      <button
        style={{ opacity: isLoading ? 0.3 : 1 }}
      >
        {isLoading ? 'Saving...': '저장'}
      </button>
    </form>
  )
}