import { FC, useState } from 'react';
import Link from 'next/link';

const pages = [
  { label: 'Toiles', link: '' },
  { label: 'Cartons', link: '/cartons' },
  { label: 'Aquarelles', link: '/aquarelles' },
  { label: 'Photographies', link: '/photographies' },
  { label: 'HR', link: '/hr' },
  { label: 'Nouveautés', link: '/nouveautes' },
];

const subPages = [
  { label: 'Pochoirs', link: '/pochoirs' },
  { label: 'Boulots mixtes', link: '/boulotsmixtes' },
];

const Tabs: FC = () => {
  const [displaySubPages, setDisplaySubPages] = useState(false);

  return (
    <nav>
      <ul className='sm:flex sm:justify-evenly'>
        {pages.map((page, index) => (
          <li
            key={index}
            className={
              page.label === 'Nouveautés' ? 'text-newRed' : 'text-black'
            }
            onClick={() =>
              page.label === 'Toiles' && setDisplaySubPages(!displaySubPages)
            }
            onMouseEnter={() =>
              page.label === 'Toiles' && setDisplaySubPages(true)
            }
            onMouseLeave={() =>
              page.label === 'Toiles' && setDisplaySubPages(false)
            }
          >
            <Link href={page.link}>{page.label}</Link>
            {displaySubPages && (
              <ul className={page.label === 'Toiles' ? 'block' : 'hidden'}>
                {subPages.map((subPage, index) => (
                  <li key={index}>
                    <Link href={subPage.link}>{subPage.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
