import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b p-4">
      <ul className="flex space-x-4">
        <li className="hover:text-blue-500">Главная</li>
        <li className="hover:text-blue-500">Квиз по Английскому</li>
        <li className="hover:text-blue-500">Квиз по Литературе</li>
        <li className="hover:text-blue-500">Квиз по Аниме</li>
        <li className="hover:text-blue-500">Квиз по Диснею</li>
        <li className="hover:text-blue-500">Квиз по Географии</li>
      </ul>
    </nav>
  );
};

export default Navbar;