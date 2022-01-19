import React from "react";
import CSS from "csstype";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
  selectedId: Props["selectedId"];
  setSelectedId: React.Dispatch<React.SetStateAction<Props["selectedId"]>>;
}

const List: React.FC<IProps> = ({
  people,
  selectedId,
  setSelectedId,
  setPeople,
}) => {
  const renderList = (): JSX.Element[] => {
    return people.map((item) => {
      return (
        <div style={listItem} key={item.id} id={item.id.toString()}>
          <img style={profileImg} src={item.url} alt={item.name} />
          <div style={{ flex: 1 }}>
            <p style={{ margin: "0px" }}>{item.name}</p>
            <p style={{ margin: "0px" }}>{item.age}</p>
            {item.note && <p style={{ margin: "0px" }}>{item.note}</p>}
          </div>
          <div className="actionBtns">
            <button
              type="button"
              style={actionBtn}
              onClick={() => setSelectedId(item.id)}
            >
              E
            </button>
            <button
              type="button"
              style={actionBtn}
              onClick={() => deleteItem(item.id)}
            >
              D
            </button>
          </div>
        </div>
      );
    });
  };

  const deleteItem = (id: any) => {
    setPeople((people) => people.filter((item) => item.id !== id));
  };

  return (
    <div>
      Lists
      <hr />
      <div style={listContainer}>{renderList()}</div>
      {people.length === 0 && <div>No List Available</div>}
    </div>
  );
};

export default List;

const listContainer: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "15px",
};

const listItem: CSS.Properties = {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "20px",
  minWidth: "300px",
  border: "1px solid #f2f2f2",
  background: "#e6e6e6",
  padding: "10px",
};

const profileImg: CSS.Properties = {
  borderRadius: "50%",
  width: "50px",
  background: "#c6c6c6",
};

const actionBtn: CSS.Properties = {
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  border: "none",
  marginInlineStart: "5px",
  cursor: "pointer",
};
