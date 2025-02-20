import ReactJson from "react-json-view";
import snakecasekeys from "snakecase-keys";
import camelcaseKeys from "camelcase-keys";

import { serialize, deserialize } from "serializr";
import { test_camel, test_snake } from "./data/test";
import { TestSerializr } from "./schema/test-serializr";
import { testSchema } from "./schema/test-zod";

import "./App.css";

function App() {
  console.log("Snake to camel via snakecasekeys");
  const snakeToCamelKeys = camelcaseKeys(test_snake, { deep: true });
  // Usage: API Response Validation.
  const parsedResponse = testSchema.parse(snakeToCamelKeys);
  console.log(parsedResponse);

  console.log("Camel to Snake via camelcasekeys");
  const responseData = testSchema.parse(test_camel);
  // Usage: Send Response in snakecase format.
  const camelToSnakeKeys = snakecasekeys(responseData, { deep: true });

  console.log("Snake to camel via serialzr");
  const snakeToCamelSerializr = deserialize(TestSerializr, test_snake);

  console.log("Camel to Snake via serialzr");
  const camelToSnakeSerializr = serialize(TestSerializr, test_camel);

  return (
    <>
      <h1>Vite + React</h1>
      <ReactJson src={snakeToCamelKeys} theme="solarized" />
      <ReactJson src={snakeToCamelSerializr} theme="apathy" />

      <ReactJson src={camelToSnakeKeys} theme="solarized" />
      <ReactJson src={camelToSnakeSerializr} theme="apathy" />
    </>
  );
}

export default App;
