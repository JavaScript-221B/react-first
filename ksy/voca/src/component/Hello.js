import { useState } from "react";

export default function Hello() {
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

    // function changeName() {
    //     // document.getElementById("name").innerText = name;
    //     setName(name === "Mike" ? "Jane" : "Mike")
    // }

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike")
            }}>Change</button>
        </div>
    )
}