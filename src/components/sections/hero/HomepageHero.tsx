import { FC } from 'react';

type Props = {
  title: string;
};

const HomepageHero: FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className='flex items-start w-full h-52 mb-16 bg-[#24231f] bg-no-repeat bg-cover opacity-90 bg-homepage sm:bg-cover sm:h-screen'>
      <h1 className='w-full py-8 text-4xl text-center bg-white bg-opacity-25 sm:px-20 sm:w-auto sm:text-6xl text-newYellow'>
        {title}
      </h1>
    </div>
  );
};

export default HomepageHero;
