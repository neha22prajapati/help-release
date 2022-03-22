import React from "react";
import CharacterList from "./components/characterList";
import Clock from "./components/Clock";
import Counter from "./components/counter";
import HeroList from "./components/heroList";
import Strength from "./components/strength";

function App() {
  return (
    <div>
      <Clock />
      <Counter />
      <CharacterList />
      <HeroList />
      <Strength />
    </div>
  );
}

export default App;
