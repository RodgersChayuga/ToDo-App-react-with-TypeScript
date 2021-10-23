import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Rodgers Chayuga",
      age: 32,
      url: "https://media-exp1.licdn.com/dms/image/C4D03AQGDxMfCMhl4cA/profile-displayphoto-shrink_200_200/0/1623263549712?e=1640217600&v=beta&t=deCLUwauVMgbSezV3xC5PPRDke3BH-tEaCQdNe8Pflc",
      note: "A clear prove and example of hard work and determination pays",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
