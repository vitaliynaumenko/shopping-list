import { useDispatch } from 'react-redux';
import {
  togglePurchased,
  editItem,
  removeItem,
} from '../store/shoppingListSlice';
import Button from './shared/Button';
import { useModal } from '../context/context';

export interface IShoppingItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  purchased: boolean;
}

const ShoppingItem: React.FC<IShoppingItem> = ({
  name,
  quantity,
  category,
  purchased,
  id,
}) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const onHandleTogglePurchased = () => {
    dispatch(togglePurchased(id));
  };
  const onHandleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  const onHandleEdit = () => {
    const itemData = {
      name,
      category,
      quantity,
      id,
      purchased,
    };
    openModal(itemData);
  };

  return (
    <div className="flex-1 flex-col px-2 py-4 shadow-sm">
      <h2 className="font-bold text-base">Name:{name}</h2>
      <div>Category:{category}</div>
      <div>Quantity:{quantity}</div>

      <div className="flex justify-between gap-1">
        <Button
          onClick={onHandleTogglePurchased}
          classes="w-18 p-2 bg-blue-300 rounded"
        >
          {purchased ? 'Purchased' : 'Buy'}
        </Button>
        <Button classes="w-18 p-2 bg-green-300 rounded" onClick={onHandleEdit}>
          Change
        </Button>
        <Button
          onClick={onHandleRemoveItem}
          classes="w-18 p-2 bg-red-400 text-white rounded"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default ShoppingItem;
