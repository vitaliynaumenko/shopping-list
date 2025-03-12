interface ISelectProps {
  list: string[] | null;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  props?: any;
}

const Select: React.FC<ISelectProps> = ({ list, onChange, ...props }) => {
  return (
    <select
      name=""
      id=""
      className="w-full border"
      onChange={onChange}
      {...props}
    >
      {list?.map((item, indx) => (
        <option key={indx}>{item}</option>
      ))}
    </select>
  );
};
export default Select;
