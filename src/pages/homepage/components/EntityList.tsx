import React, { createContext } from "react";
import Item from "@src/pages/homepage/components/Item";

type EntityListProps = {
  title: string;
  items: string[];
  setItems: (items: string[]) => void;
  showRating?: boolean;
};

const EntityListContext = createContext<{ items: string[]; setItems: (items: string[]) => void; title: string }>({
  items: [],
  setItems: () => { },
  title: "",
});

const EntityList: React.FC<EntityListProps> = ({ title, items, setItems, showRating = false }) => {
  return (
    <EntityListContext.Provider value={{ items, setItems, title }}>
      <div className="flex flex-col p-4 rounded-lg shadow-md">
        <h2 className="font-bold mb-2">{title}</h2>
        {items.map((_, index) => (
          <Item key={index} id={index} label={`${title} ${index + 1}`} onRemoveItem={() => {
            const updatedItems = items.filter((_, i) => i !== index);
            setItems(updatedItems);
          }}>
            <Item.RemoveButton />
            <Item.Input />
            {showRating && <Item.Rating />}
          </Item>
        ))}
      </div>
    </EntityListContext.Provider>
  );
};

export default EntityList;
