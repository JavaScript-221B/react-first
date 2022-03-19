import { useState } from "react";
import UserName from './UserName';

export default function Hello({age}) {
    /*
    function showName() {
        console.log("Mike");
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(txt) {
        console.log(txt);
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button
                onClick={() => {
                    showAge(30);
                }}
            >
                Show age
            </button>
            <input
                type="text"
                onChange={e => {
                    const txt = e.target.value;
                    showText(txt);
                }}
            />
        </div>
    );
    */
    

    
    //let name = "Mike"; //이 컴포넌트가 관리하고 있는 상태값이 아니라 단순 변수
    const [name, setName] = useState('Mike'); //setName 함수가 호출되서 name이 바뀌면 이 컴포넌트를 다시 렌더링해줌
    // const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    // function changeName() {
    //     // document.getElementById("name").innerText = name;
    //     setName(name === "Mike" ? "Jane" : "Mike")
    // }

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}({age})</h2>
            <UserName name={name} />
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
                // setAge(age + 1);
            }}>Change</button>
        </div>
    )
}