import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onKeyChange = (event) => setKeyword(event.target.value);

  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => console.log("i run only once"), []);

  useEffect(() => {
    if (keyword != "") {
      console.log("i run when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    if (counter != 0) {
      console.log("i run when 'counter' changes");
    }
  }, [counter]);

  useEffect(() => {
    if (counter != 0 || keyword != "") {
      console.log("i run when 'counter' and 'keyword' change");
    }
  }, [counter, keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={onKeyChange}
      ></input>
      <h1>{keyword}</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
