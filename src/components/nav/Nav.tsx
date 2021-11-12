import { FC } from 'react';
import Link from 'next/link';

const pages = [
  { label: 'Accueil', link: '/' },
  { label: 'A propos', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

const Nav: FC = () => {
  return (
    <nav>
      <ul className='sm:flex sm:gap-4'>
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page.link}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
