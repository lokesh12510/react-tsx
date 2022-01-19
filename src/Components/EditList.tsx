import React, { useEffect, useState } from "react";
import CSS from "csstype";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  selectedId: Props["selectedId"];
  setSelectedId: React.Dispatch<React.SetStateAction<Props["selectedId"]>>;
}

const EditList: React.FC<IProps> = ({
  people,
  setPeople,
  selectedId,
  setSelectedId,
}) => {
  const currentItem = people.filter((item) => item.id === selectedId);

  const [input, setInput] = useState({
    name: currentItem[0].name,
    age: currentItem[0].age,
    image: currentItem[0].url,
    note: currentItem[0].note,
  });

  useEffect(() => {
    setInput({
      name: currentItem[0].name,
      age: currentItem[0].age,
      image: currentItem[0].url,
      note: currentItem[0].note,
    });
    // eslint-disable-next-line
  }, [selectedId]);

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

    const newList = people.map((item) => {
      if (item.id === selectedId) {
        const updatedItem = {
          id: item.id,
          name: input.name,
          age: Number(input.age),
          url: input.image,
          note: input.note,
        };
        return updatedItem;
      } else {
        return item;
      }
    });
    setPeople([...newList]);
    setSelectedId(0);
  };

  return (
    <form style={form} onSubmit={handleSubmit} method="POST">
      <p>Edit Form</p>
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
        Update
      </button>
      <button style={submitBtn} type="button" onClick={() => setSelectedId(0)}>
        Back
      </button>
    </form>
  );
};

export default EditList;

const form: CSS.Properties = {
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  background: "#c9f2df",
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
  textTransform: "uppercase",
};
