import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface DropdownMenuProps {
  title: string;
  children: (close: () => void) => React.ReactNode;
  href?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children, href }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault();
      setDropdownOpen((open) => !open);
    }
  };

  // Close dropdown function to pass to children
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="relative w-full">
      {href ? (
        <a
          href={href}
          onClick={handleToggle}
          className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {title}
          {dropdownOpen ? <IconChevronUp size={20} role="none"/> : <IconChevronDown size={20} role="none"/>}
        </a>
      ) : (
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-between w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {title}
          {dropdownOpen ? <IconChevronUp size={20} role="none"/> : <IconChevronDown size={20} role="none"/>}
        </button>
      )}
      {dropdownOpen && (
        <div className="absolute left-0 z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg py-1">
          {children(closeDropdown)}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;