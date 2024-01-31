import { FaCircleCheck } from "react-icons/fa6";

 
export const FormSuccess = ({
  message,
}) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <FaCircleCheck className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
