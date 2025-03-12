import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import AddItemForm from './AddItemForm';
import { ModalProvider } from '../context/context';
import shoppingListReducer from '../store/shoppingListSlice';

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

describe('AddItemForm', () => {
  test('renders form fields correctly', () => {
    renderWithProviders(<AddItemForm />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  test('validates form input', () => {
    renderWithProviders(<AddItemForm />);

    const submitButton = screen.getByText('Add');
    fireEvent.click(submitButton);

    expect(screen.getByText(/Please enter/)).toBeInTheDocument(); // Перевірка повідомлення про помилку
  });

  test('submits form with valid data', () => {
    renderWithProviders(<AddItemForm />);

    fireEvent.change(screen.getByRole('textbox', { name: /name/i }), {
      target: { value: 'Test Item' },
    });

    fireEvent.change(screen.getByRole('spinbutton', { name: /quantity/i }), {
      target: { value: '1' },
    });

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Test Category' },
    });

    fireEvent.click(screen.getByText('Add'));

    // Add assertions for form submission
  });

  test('handles edit mode correctly', () => {
    const mockEditItem = {
      id: '1',
      name: 'Edit Item',
      quantity: 2,
      category: 'Edit Category',
      purchased: false,
    };

    renderWithProviders(<AddItemForm />);
    // Simulate edit mode by setting editingItem
    // Add assertions for edit mode
  });
});
