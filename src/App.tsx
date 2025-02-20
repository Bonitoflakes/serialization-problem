import { useState } from "react";
import "./App.css";
import ReactJson from "react-json-view";
import snakecasekeys from "snakecase-keys";
import camelcaseKeys from "camelcase-keys";

import { serialize, deserialize } from "serializr";
import { test_camel, test_snake } from "./data/test";
import { TestSerializr } from "./schema/test-serializr";

function App() {
  const [count, setCount] = useState(0);

  console.log("Snake to camel via snakecasekeys");
  const snakedToCamelKeys = snakecasekeys(test_snake);

  console.log("Camel to Snake via camelcasekeys");
  const camelToSnakeKeys = camelcaseKeys(test_camel, { deep: true });

  console.log("Snake to camel via serialzr");
  const snakeToCamel = deserialize(TestSerializr, test_snake);

  console.log("Camel to Snake via serialzr");
  const camelToSnake = serialize(TestSerializr, test_camel);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <ReactJson src={snakedToCamelKeys} theme="solarized" />
        <ReactJson src={snakeToCamel} theme="apathy" />
        <ReactJson src={camelToSnakeKeys} theme="solarized" />
        <ReactJson src={camelToSnake} theme="apathy" />
      </div>
    </>
  );
}

export default App;
