"use client"
import { useState } from 'react';
import { FaChevronDown, FaSignOutAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg'
interface UserDropdownProps {
  userName: string;
  onClickOutside?: () => void
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userName, onClickOutside }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex items-center cursor-pointer pl-12 min-w-max  ">
      <div className='flex' onClick={toggleDropdown}>
        <CgProfile
          className="w-6"
        />
        <div className="font-medium">{userName}</div>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-1 top-6 mt-2 w-44 bg-white rounded-lg shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out <FaSignOutAlt className="inline ml-1" />
            </a>
          </div>
        </div>
      )}
      <div className="ml-2">
        <FaChevronDown onClick={toggleDropdown} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default UserDropdown;
