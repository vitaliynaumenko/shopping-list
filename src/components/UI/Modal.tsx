import { ReactNode } from 'react';
import { useModal } from '../../context/context';

const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold">Modal Title</h2>

        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
