import { FC } from 'react';
import Link from 'next/link';

const pages = [
  { label: 'Toiles', link: '/' },
  { label: 'Cartons', link: '/' },
  { label: 'Aquarelles', link: '/' },
  { label: 'Photographies', link: '/' },
  { label: 'HR', link: '/hr' },
];

const Tabs: FC = () => {
  return (
    <nav>
      <ul className='sm:flex sm:justify-evenly'>
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page.link}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
