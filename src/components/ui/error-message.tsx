export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-center items-center text-sm text-red-600 gap-1 mt-2">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
