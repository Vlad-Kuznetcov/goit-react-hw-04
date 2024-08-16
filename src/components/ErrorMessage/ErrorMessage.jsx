import toast, { Toaster } from "react-hot-toast";

const ErrorMessage = ({ title, notify }) => {
  if (notify) {
    toast.error(notify);
  }
  return (
    <div>
      <h2>{title}</h2>
      <Toaster />
    </div>
  );
};

export default ErrorMessage;
