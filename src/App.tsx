import React, { useState } from "react";
import "./App.css";
import List from "./Components/List";
import AddList from "./Components/AddList";
import EditList from "./Components/EditList";

export interface IState {
  people: {
    id: number;
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
  selectedId: number | string;
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      id: 2,
      name: "lokesh",
      url: "https://lh3.googleusercontent.com/ogw/ADea4I4uMKqSMw2XqG7DKA1gROd0gPOI9UoMZHe6Jnoa9w=s83-c-mo",
      age: 22,
      note: "Frontend Dev",
    },
    {
      id: 22,
      name: "krish",
      url: "https://lh3.googleusercontent.com/ogw/ADea4I4uMKqSMw2XqG7DKA1gROd0gPOI9UoMZHe6Jnoa9w=s83-c-mo",
      age: 15,
      note: "New",
    },
  ]);

  const [selectedId, setSelectedId] = useState<IState["selectedId"]>(0);

  return (
    <div className="App">
      <h1>Peoples</h1>
      <hr />
      <div className="d-flex">
        <List
          people={people}
          setPeople={setPeople}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        {selectedId === 0 ? (
          <AddList people={people} setPeople={setPeople} />
        ) : (
          <EditList
            people={people}
            setPeople={setPeople}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
      </div>
    </div>
  );
}

export default App;
