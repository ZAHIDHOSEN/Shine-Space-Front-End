
export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base-100">
      
      {/* Spinner */}
      <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-lg font-medium text-gray-500">
        Loading, please wait...
      </p>

    </div>
  );
}