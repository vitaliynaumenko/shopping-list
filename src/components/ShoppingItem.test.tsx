import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ShoppingItem from './ShoppingItem';
import { ModalProvider } from '../context/context';
import shoppingListReducer from '../store/shoppingListSlice';

const mockItem = {
  id: '1',
  name: 'Test Item',
  quantity: 2,
  category: 'Test Category',
  purchased: false,
};

const renderWithProviders = (component: React.ReactNode) => {
  const store = configureStore({
    reducer: {
      shoppingList: shoppingListReducer,
    },
  });

  return render(
    <Provider store={store}>
      <ModalProvider>{component}</ModalProvider>
    </Provider>
  );
};

describe('ShoppingItem', () => {
  test('renders item details correctly', () => {
    renderWithProviders(<ShoppingItem {...mockItem} />);

    expect(screen.getByText(`Name:${mockItem.name}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Category:${mockItem.category}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Quantity:${mockItem.quantity}`)
    ).toBeInTheDocument();
  });

  test('toggles purchase status when Buy/Purchased button is clicked', () => {
    renderWithProviders(<ShoppingItem {...mockItem} />);

    const toggleButton = screen.getByText('Buy');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent('Purchased');
  });

  test('opens edit modal when Change button is clicked', () => {
    renderWithProviders(<ShoppingItem {...mockItem} />);

    const editButton = screen.getByText('Change');
    fireEvent.click(editButton);
    // Add assertions for modal opening
  });
});
