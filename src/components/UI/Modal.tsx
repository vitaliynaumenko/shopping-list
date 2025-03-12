import { ReactNode } from 'react';
import { useModal } from '../../context/context';

const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className=" w-full flex items-center justify-between">
          <h2 className="text-lg font-bold">Modal Title</h2>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
