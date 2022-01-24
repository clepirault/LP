import { FC, ReactNode } from 'react';
import Footer from '../footer/Footer';
import MobileHeader from '../header/MobileHeader';

type Props = {
  children: ReactNode;
};

const MobileLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <div>
        <div>
          <MobileHeader />
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
