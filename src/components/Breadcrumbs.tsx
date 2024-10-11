import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-gray-500 dark:text-gray-400 py-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Inicio
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className="flex items-center">
              <ChevronRight size={16} className="mx-2" />
              {isLast ? (
                <span className="text-gray-700 dark:text-gray-200">{name}</span>
              ) : (
                <Link to={routeTo} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;