import { FC } from 'react';
import Nav from '../nav/Nav';
import Tabs from '../tabs/Tabs';

const Header: FC = () => {
  return (
    <header>
      <div className='w-full sm:flex sm:justify-end'>
        <Nav />
      </div>
      <div className='w-full sm:pt-16'>
        <Tabs />
      </div>
    </header>
  );
};

export default Header;
