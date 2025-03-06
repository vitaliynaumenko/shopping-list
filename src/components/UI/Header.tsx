import { useModal } from '../../context/context';
import SearchBar from '../SearchBar';
import Button from '../shared/Button';

export default function Header() {
  const { openModal } = useModal();
  return (
    <header className="w-full px-4 py-4 flex">
      <SearchBar />
      <div>
        <Button onClick={openModal}> Add Prodact</Button>
      </div>
    </header>
  );
}
