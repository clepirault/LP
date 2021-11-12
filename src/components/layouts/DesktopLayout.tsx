import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type Props = {
  children: ReactNode;
};

const DesktopLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <div className='w-4/5 m-auto'>
        <div className='pb-16 mb-16 border-b border-solid border-black'>
          <Header />
        </div>
        <main>{children}</main>
      </div>
      <div className='mt-16 border-t border-solid border-black'>
        <Footer />
      </div>
    </div>
  );
};

export default DesktopLayout;
