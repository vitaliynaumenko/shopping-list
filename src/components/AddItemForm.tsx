import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from './shared/Select';
import { CATEGORIES_SELECT } from '../data/data';
import Button from './shared/Button';

const AddItemForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>();
  const [category, setCategory] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(name, quantity, category);
  }, [name, quantity, category]);

  return (
    <form>
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
