import { useSelector } from 'react-redux';
import { RootState } from './../store/store';
import { useEffect } from 'react';

export const useLocalStorage = () => {
  const shoppingList = useSelector((state: RootState) => state.shoppingList);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(shoppingList));
  }, [shoppingList]);
};
