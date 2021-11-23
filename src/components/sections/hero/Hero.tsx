import { FC } from 'react';

type Props = {
  variant: 'homepage' | 'HR';
};

const homepageStyle =
  'w-full sm:mb-16 bg-homepage opacity-90 bg-no-repeat bg-contain sm:bg-cover h-64 sm:h-screen';
const hrStyle =
  'w-full sm:mb-16 bg-hr opacity-90 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-64 sm:h-72';

const Hero: FC<Props> = (props) => {
  const { variant } = props;

  return (
    <div
      className={
        (variant === 'homepage' && homepageStyle) ||
        (variant === 'HR' && hrStyle)
      }
    >
      <h1>Hero block</h1>
    </div>
  );
};

export default Hero;
