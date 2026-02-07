import { ReactNode } from "react";

export default function NavigationButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button 
        onClick={onClick}
        className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all active:scale-[0.98]">
      {children}
    </button>
  );
}
