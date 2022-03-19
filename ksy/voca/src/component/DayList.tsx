import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch';

export interface IDay {
    id: number;
    day: number;
}

export default function DayList() {
    // const [ count, setCount ] = useState(0);
    
    // function onClick() {
    //     setCount(count + 1);
    // }

    // function onClick2() {
    //     setDays([
    //         ...days,
    //         {
    //             id: Math.random(),
    //             day: 1,
    //         }
    //     ])
    // }


    // const [ days, setDays ] = useState([]);
    
    // useEffect(() => {
    //     // console.log("Count change");
    //     fetch('http://localhost:3001/days') //Promise 반환
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setDays(data);
    //         });
    // }, []); //의존성 배열의 값이 변경되는 경우에만 이 함수가 실행됨
    // //상태값과 무관하게 렌더링 직후 한 번만 실행되는 작업은 빈 배열을 전달하면 됨

    
    const days : IDay[] = useFetch('http://localhost:3001/days');

    if (days.length === 0) {
        return <span>Loading...</span>
    }

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
        // <button onClick={onClick}>{count}</button>
        // <button onClick={onClick2}>{count}</button>
    );
}