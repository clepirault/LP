import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  link?: string;
};

const DesktopLayout: FC<Props> = (props) => {
  const { children, link } = props;
  return (
    <div>
      <div className='w-4/5 m-auto'>
        <div className='pb-16 mt-8 mb-16 border-b border-black border-solid'>
          <Header />
        </div>
        <main>{children}</main>
      </div>
      <div className='mt-16 border-t border-black border-solid'>
        <Footer />
      </div>
      {link && (
        <div className='fixed p-2 text-white bg-gray-200 rounded-full bottom-16 right-16'>
          <Link href={link} passHref>
            <FaChevronUp />
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopLayout;
