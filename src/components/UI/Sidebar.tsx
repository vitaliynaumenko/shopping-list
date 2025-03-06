import { CATEGORIES_SELECT } from '../../data/data';
import Select from '../shared/Select';

const Sidebar: React.FC = () => {
  return (
    <aside className="p-3">
      <Select list={CATEGORIES_SELECT} />
    </aside>
  );
};
export default Sidebar;
