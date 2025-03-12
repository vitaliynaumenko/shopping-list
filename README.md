# Shopping List Application

Simple and intuitive shopping list application built with React and TypeScript. Manage your shopping items with ease!

## Features

- ✨ Add new shopping items with name, quantity, and category
- 📝 Edit existing items
- ✅ Mark items as purchased
- 🗑️ Remove items from the list
- 🔍 Search functionality
- 📱 Responsive design
- 💾 Local storage persistence

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/shopping-list-app.git
```

2. Install dependencies:

```bash
cd shopping-list-app
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Usage

### Adding Items

1. Click the "Add Item" button
2. Fill in the item details:
   - Name
   - Quantity
   - Category
3. Click "Add" to save

### Managing Items

- Click "Buy" to mark an item as purchased
- Click "Change" to edit item details
- Click "Delete" to remove an item

## Testing

Run the test suite:

```bash
npm test
```

## Project Structure

```
src/
├── components/
│   ├── UI/
│   │   └── Header.tsx
│   ├── AddItemForm.tsx
│   ├── ShoppingItem.tsx
│   └── ShoppingList.tsx
├── context/
│   └── context.tsx
├── layout/
│   └── Layout.tsx
├── store/
│   └── shoppingListSlice.ts
└── App.tsx
```

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- TailwindCSS
- Jest & Testing Library
