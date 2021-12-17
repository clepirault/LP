import { FC, ReactNode, useEffect, useState } from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

type Props = {
  children: ReactNode;
  link?: string;
};

const MainLayout: FC<Props> = (props) => {
  const { children, link } = props;

  const GetDeviceSize = () => {
    const [width, setWidth] = useState(0);
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return width;
  };

  const width = GetDeviceSize();

  return (
    <div>
      {width > 640 ? (
        <DesktopLayout link={link}>{children}</DesktopLayout>
      ) : (
        <MobileLayout>{children}</MobileLayout>
      )}
    </div>
  );
};

export default MainLayout;
