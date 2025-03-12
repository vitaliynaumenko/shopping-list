import { useSelector } from 'react-redux';
import { RootState } from './../store/store';
import { useEffect } from 'react';

export const useLocalStorage = () => {
  const shoppingList = useSelector((state: RootState) => state.shoppingList);

  useEffect(() => {
    new Promise<void>((resolve) => {
      setTimeout(() => {
        localStorage.setItem('products', JSON.stringify(shoppingList));
        resolve();
      }, 500);
    });
  }, [shoppingList]);
};
