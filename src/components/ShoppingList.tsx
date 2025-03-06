import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../store/store';
const ShoppingList: React.FC = ({}) => {
  const items = useSelector((state: RootState) => state.shoppingList.items);

  return (
    <div className="w-full grid grid-cols-[1fr_1fr_1fr] gap-2">
      {items.map((item, key) => (
        <div key={key}>
          <span> title: {item.name}</span>
          <span> quantity: {item.quantity}</span>
          <span> category: {item.category}</span>
        </div>
      ))}
    </div>
  );
};
export default ShoppingList;
