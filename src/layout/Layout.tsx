import ShoppingList from '../components/ShoppingList';
import Header from '../components/UI/Header';
import Modal from '../components/UI/Modal';
import AddItemForm from '../components/AddItemForm';
import Sidebar from '../components/UI/Sidebar';
import ModalProvider from '../context/context';

export default function Layout() {
  return (
    <ModalProvider>
      <main className="w-full h-full">
        <Header />
        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <Sidebar />
          <ShoppingList />
        </div>
      </main>
      <Modal>
        <AddItemForm />
      </Modal>
    </ModalProvider>
  );
}
