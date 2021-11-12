import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type Props = {
  children: ReactNode;
};

const MobileLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MobileLayout;
