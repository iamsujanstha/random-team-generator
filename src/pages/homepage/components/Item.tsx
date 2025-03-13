import React, { createContext, useContext, useState } from "react";

type ItemProps = {
  label: string;
  onRemoveItem: (id: number) => void;
  id: number;
  children?: React.ReactNode;
};

// Context for managing Item data
const ItemContext = createContext<{ id: number; label: string; onRemoveItem: (id: number) => void }>({
  id: 0,
  label: "",
  onRemoveItem: () => { },
});

// Main Item component
const Item: React.FC<ItemProps> & {
  RemoveButton: React.FC;
  Input: React.FC;
  Rating: React.FC;
} = ({ label, onRemoveItem, id, children }) => {
  return (
    <ItemContext.Provider value={{ id, label, onRemoveItem }}>
      <div className="flex gap-4">
        <button className="hover:text-gray-700 bg-gray-300 p-2 text-white" onClick={() => onRemoveItem(id)}>
          <i className="fa fa-times"></i>
        </button>{children}</div>
    </ItemContext.Provider>
  );
};

// Subcomponent: Remove Button
const RemoveButton: React.FC = () => {
  // const { id, onRemoveItem } = useContext(ItemContext);
  return (
    <></>
  );
};

// Subcomponent: Input Field
const Input: React.FC = () => {
  const { label } = useContext(ItemContext);
  return (
    <input type="text" className="pr-4 py-2 focus:outline-none w-full border border-gray-300" placeholder={label} />
  );
};

// Subcomponent: Rating System
const Rating: React.FC = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  return (
    <div className="bg-white flex my-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const isHighlighted = hoveredValue !== null ? i <= hoveredValue : selectedValue !== null && i <= selectedValue;

        return (
          <div
            key={i}
            className={`flex items-center px-4 py-1 cursor-pointer transition-all 
            ${isHighlighted ? "bg-amber-600 text-white" : "bg-white text-black"}
          `}
            onMouseEnter={() => setHoveredValue(i)}
            onMouseLeave={() => setHoveredValue(null)}
            onClick={() => setSelectedValue(i)}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};

// Attach subcomponents to Item
Item.RemoveButton = RemoveButton;
Item.Input = Input;
Item.Rating = Rating;

export default Item;
