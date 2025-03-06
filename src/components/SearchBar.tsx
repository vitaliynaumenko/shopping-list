import { useState } from 'react';
import Button from './shared/Button';
import { useDispatch } from 'react-redux';
import { setQuerySearch } from '../store/searchQuerySlice';
const SearchBar: React.FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    dispatch(setQuerySearch(value));
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-full max-w-3xs border">
        <input
          type="text"
          onChange={onChangeInput}
          placeholder="Search product"
          className="outline-none px-2"
        />
      </div>
      <Button
        onClick={() => console.log('send search')}
        classes="px-1 bg-blue-400"
      >
        Search
      </Button>
    </div>
  );
};
export default SearchBar;
