import { useModal } from '../../context/context';
import SearchBar from '../SearchBar';
import Button from '../shared/Button';

export default function Header() {
  const { openModal } = useModal();
  return (
    <header className="w-full px-4 py-4 flex shadow-sm mb-4">
      <SearchBar />
      <div className="ml-auto">
        <Button
          classes="p-1 bg-green-400 text-white rounded"
          onClick={openModal}
        >
          {' '}
          Add Product
        </Button>
      </div>
    </header>
  );
}
