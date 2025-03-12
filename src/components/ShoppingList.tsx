import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../store/store';
import ShoppingItem from './ShoppingItem';

const ShoppingList: React.FC = ({}) => {
  const items = useSelector((state: RootState) => state.shoppingList.items);
  const searchQuery = useSelector(
    (state: RootState) => state.searchBar.searchQuery
  );
  const fillteredCategory = useSelector(
    (state: RootState) => state.filterBar.category
  );
  const fillteredPurchased = useSelector(
    (state: RootState) => state.filterBar.purchsad
  );

  const isNotFiltered =
    searchQuery === '' &&
    (!fillteredCategory ||
      fillteredCategory === '' ||
      fillteredCategory === 'All') &&
    (!fillteredPurchased ||
      fillteredPurchased === '' ||
      fillteredPurchased === 'All');

  const fillteredItems = isNotFiltered
    ? items
    : items.filter((item) => {
        const matchedSearchQuery = item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const matchedFilteredCategory =
          fillteredCategory && fillteredCategory !== 'All'
            ? item.category.toLowerCase() === fillteredCategory.toLowerCase()
            : true;

        const matchesPurchased =
          !fillteredPurchased ||
          fillteredPurchased === '' ||
          fillteredPurchased === 'All'
            ? true
            : fillteredPurchased === 'Purchased'
            ? item.purchased
            : !item.purchased;
        return (
          matchedSearchQuery && matchedFilteredCategory && matchesPurchased
        );
      });

  return (
    <div className="w-full grid grid-cols-[1fr_1fr_1fr] gap-2">
      {fillteredItems.length > 0 ? (
        fillteredItems.map((item) => (
          <ShoppingItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            purchased={item.purchased}
          />
        ))
      ) : (
        <p className="text-gray-500 col-span-3 text-center">
          Product are not found
        </p>
      )}
    </div>
  );
};
export default ShoppingList;
