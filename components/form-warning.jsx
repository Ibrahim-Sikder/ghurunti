import { FaExclamationTriangle } from "react-icons/fa";

export const FormWarning = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-400/30 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-400">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
