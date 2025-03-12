import shoppingListReducer, {
  AddItem,
  editItem,
  removeItem,
  togglePurchased,
} from './shoppingListSlice';

describe('shoppingListSlice', () => {
  const initialState = {
    items: [],
    history: [],
  };

  const mockItem = {
    id: '1',
    name: 'Test Item',
    quantity: 1,
    category: 'Test Category',
    purchased: false,
  };

  test('should handle initial state', () => {
    expect(shoppingListReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should handle AddItem', () => {
    const actual = shoppingListReducer(initialState, AddItem(mockItem));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0]).toEqual(mockItem);
  });

  test('should handle editItem', () => {
    const state = {
      items: [mockItem],
      history: [],
    };
    
    const updatedItem = { ...mockItem, name: 'Updated Item' };
    const actual = shoppingListReducer(state, editItem(updatedItem));
    
    expect(actual.items[0].name).toBe('Updated Item');
  });

  test('should handle removeItem', () => {
    const state = {
      items: [mockItem],
      history: [],
    };
    
    const actual = shoppingListReducer(state, removeItem(mockItem.id));
    expect(actual.items).toHaveLength(0);
  });

  test('should handle togglePurchased', () => {
    const state = {
      items: [mockItem],
      history: [],
    };
    
    const actual = shoppingListReducer(state, togglePurchased(mockItem.id));
    expect(actual.items[0].purchased).toBe(true);
  });
}); 