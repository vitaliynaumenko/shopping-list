import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from './shared/Select';
import { CATEGORIES_SELECT } from '../data/data';
import Button from './shared/Button';
import { AddItem } from '../store/shoppingListSlice';

const AddItemForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>();
  const [category, setCategory] = useState<string>('');
  const dispatch = useDispatch();

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      id: Date.now().toString(),
      name,
      quantity: quantity || 1,
      category,
      purchased: false,
    };
    dispatch(AddItem(newItem));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="border rounded"
      />
      <Select
        list={CATEGORIES_SELECT}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default AddItemForm;
