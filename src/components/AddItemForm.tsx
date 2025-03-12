import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from './shared/Select';
import { CATEGORIES_SELECT } from '../data/data';
import Button from './shared/Button';
import { AddItem, editItem } from '../store/shoppingListSlice';
import { useModal } from '../context/context';

import { validateItem } from '../utils/validation';

const AddItemForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>();
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { editingItem, closeModal } = useModal();

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setQuantity(editingItem.quantity);
      setCategory(editingItem.category);
    }
  }, [editingItem]);

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errorMsg = validateItem(name, quantity || 0);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    if (editingItem) {
      dispatch(
        editItem({
          id: editingItem.id,
          name,
          quantity: quantity || 1,
          category,
          purchased: editingItem.purchased,
        })
      );
    } else {
      dispatch(
        AddItem({
          id: Date.now().toString(),
          name,
          quantity: quantity || 1,
          category,
          purchased: false,
        })
      );
    }
    setName('');
    setQuantity(0);
    setCategory('');
    closeModal();
  };

  useEffect(() => {
    setError(null);
  }, [name, quantity]);

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="w-full gap-1 mb-2">
        <span className="w-18"> Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded"
        />
      </div>
      <div className="w-full px-1 gap-1 mb-2">
        Quantity
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          className="w-full px-1 border rounded"
        />
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="w-full gap-1 mb-2">
        Category
        <Select
          list={CATEGORIES_SELECT}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <Button
        disabled={!!error?.length}
        classes="w-20 mx-auto py-2 bg-blue-300 text-white rounded"
        type="submit"
      >
        {editingItem ? 'Change' : 'Add'}
      </Button>
    </form>
  );
};
export default AddItemForm;
