import React, { useState } from "react";
import CSS from "csstype";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    image: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // Form Submit
    e.preventDefault();
    if (!input.name || !input.age || !input.image) return;

    setPeople([
      ...people,
      {
        id: Math.floor(Math.random() * 100),
        name: input.name,
        age: Number(input.age),
        url: input.image,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      image: "",
      note: "",
    });
  };

  return (
    <form style={form} onSubmit={handleSubmit} method="POST">
      <p>Add Form</p>
      <input
        style={inputField}
        type="text"
        name="name"
        placeholder="Enter Name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        style={inputField}
        type="number"
        name="age"
        placeholder="Enter Age"
        value={input.age}
        onChange={handleChange}
      />
      <input
        style={inputField}
        type="text"
        name="image"
        placeholder="Enter Profile URL"
        value={input.image}
        onChange={handleChange}
      />
      <textarea
        style={inputField}
        name="note"
        placeholder="Enter Note"
        value={input.note}
        onChange={handleChange}
      />
      <button style={submitBtn} type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddList;

const form: CSS.Properties = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  background: "#f2f2f2",
  minWidth: "300px",
  textAlign: "center",
  gap: "20px",
};

const inputField: CSS.Properties = {
  padding: "15px",
  borderRadius: "5px",
  border: "1px solid #f6f6f6",
  outline: "none",
};

const submitBtn: CSS.Properties = {
  padding: "10px",
  cursor: "pointer",
};
