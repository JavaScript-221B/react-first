import './App.css';

function App() {
  const name ="Tom";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  }

  return (
    <div className="App">
      <h1
        style={{
          color: 'red',
          backgroundColor: 'green',
        }}
      >
        Hello, {name}
        <p>{2 + 3}</p>
        <a href={naver.url}>{naver.name}</a>
      </h1>
    </div>
  );
}

export default App;
