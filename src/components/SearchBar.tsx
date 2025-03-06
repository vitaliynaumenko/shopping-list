import Button from './shared/Button';
const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-full max-w-3xs border">
        <input
          type="text"
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
