import { FC } from 'react';

type Props = {
  title?: string;
  variant: 'homepage' | 'hr' | 'photographies';
};

const homepageStyle =
  'w-full sm:mb-16 bg-homepage opacity-90 bg-no-repeat bg-contain sm:bg-cover h-64 sm:h-screen';
const hrStyle =
  'w-full sm:mb-16 bg-hr opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-64 sm:h-96';
const photographiesStyle =
  'w-full sm:mb-16 bg-photographies opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-64 sm:h-96';

const Hero: FC<Props> = (props) => {
  const { title, variant } = props;

  return (
    <div
      className={
        (variant === 'homepage' ? homepageStyle : '') ||
        (variant === 'hr' ? hrStyle : '') ||
        (variant === 'photographies' ? photographiesStyle : '')
      }
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Hero;
