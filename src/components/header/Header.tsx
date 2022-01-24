import { FC } from 'react';
import Nav from '../nav/Nav';
import Tabs from '../tabs/Tabs';
import Title from '../title/Title';

const items = [{ label: 'Lionel Pirault', link: '/' }];

const Header: FC = () => {
  return (
    <header>
      <div className='flex justify-between w-full'>
        <Title link={items[0].link} variant='main'>
          {items[0].label}
        </Title>
        <Nav />
      </div>
      <div className='w-full pt-16'>
        <Tabs />
      </div>
    </header>
  );
};

export default Header;
