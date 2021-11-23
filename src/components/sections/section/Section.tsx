import { FC, ReactNode } from 'react';
import Title from '../../title/Title';

type Props = {
  children: ReactNode;
  title: string;
};

const Section: FC<Props> = (props) => {
  const { children, title } = props;
  return (
    <div>
      <Title variant='secondary'>{title}</Title>
      <div className='pt-16 border-t border-solid border-black flex'>
        {children}
      </div>
    </div>
  );
};

export default Section;
