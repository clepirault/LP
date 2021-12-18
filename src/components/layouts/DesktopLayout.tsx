import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import UpButton from '../button/UpButton';

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
      {link && <UpButton link={link} />}
    </div>
  );
};

export default DesktopLayout;
