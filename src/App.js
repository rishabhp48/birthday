import react, { useState } from "react";
import data from "./data";
import List from "./list";
import "./index.css";

const App = () => {
  const [people,setPeople]=useState(data)
  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthday's Today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
      
    </main>
  );
};

export default App;
