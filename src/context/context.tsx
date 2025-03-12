import { createContext, ReactNode, useContext, useState } from 'react';
import { IShoppingItem } from '../components/ShoppingItem';

interface IModalContextProps {
  isOpen: boolean;
  openModal: (itemData?: IShoppingItem) => void;
  closeModal: () => void;
  editingItem: IShoppingItem | null;
}

const ModalContext = createContext<IModalContextProps | null>(null);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<IShoppingItem | null>(null);

  const openModal = (itemData?: IShoppingItem) => {
    setEditingItem(itemData || null);
    setIsOpen(true);
  };
  const closeModal = () => {
    setEditingItem(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, editingItem }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
