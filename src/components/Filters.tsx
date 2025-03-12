import { PURCHASED, CATEGORIES_SELECT } from '../data/data';
import Select from '../components/shared/Select';
import { useDispatch } from 'react-redux';
import { setCategory, setPurchsad } from '../store/filterBarSclice';

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Select
        onChange={(e) => dispatch(setCategory(e.target.value))}
        list={CATEGORIES_SELECT}
      />
      <Select
        onChange={(e) => dispatch(setPurchsad(e.target.value))}
        list={PURCHASED}
      />
    </>
  );
};
export default FilterBar;
