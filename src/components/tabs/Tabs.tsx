import { FC } from 'react';

const pages = [
  { label: 'Toiles' },
  { label: 'Cartons' },
  { label: 'Aquarelles' },
  { label: 'Photographies' },
  { label: 'HR' },
];

const Tabs: FC = () => {
  return (
    <nav>
      <ul className='sm:flex sm:justify-evenly'>
        {pages.map((page, index) => (
          <li key={index} className='sm:hover:text-customYellow'>
            {page.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
