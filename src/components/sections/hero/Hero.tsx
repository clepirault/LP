import { FC } from 'react';

type Props = {
  title?: string;
  variant:
    | 'homepage'
    | 'hr'
    | 'photographies'
    | 'pochoirs'
    | 'boulotsMixtes'
    | 'cartons'
    | 'aquarelles';
};

const homepageStyle =
  'w-full flex items-start mb-16 bg-homepage opacity-100 bg-no-repeat bg-contain sm:bg-cover h-64 sm:h-screen bg-gray-900';
const hrStyle =
  'w-full flex justify-center items-start sm:items-center mb-16 bg-hr opacity-100 bg-no-repeat bg-cover sm:bg-center h-64 sm:h-96 bg-newBlue';
const photographiesStyle =
  'w-full flex justify-center items-start sm:items-center mb-16 bg-photographies opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-64 sm:h-96 bg-gray-700';
const pochoirsStyle =
  'w-full flex justify-center items-start sm:items-center mb-16 bg-pochoirs opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-40 sm:h-96';
const boulotsMixtesStyle =
  'w-full flex justify-center items-start sm:items-center mb-16 bg-boulots-mixtes opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-36 sm:h-96';
const cartonsStyle =
  'w-full flex justify-center items-start sm:items-center mb-16 bg-cartons opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-36 sm:h-96';
const aquarellesStyle =
  'w-full flex justify-center items-start sm:items-center mb-16 bg-aquarelles opacity-100 bg-no-repeat bg-contain sm:bg-cover sm:bg-center h-36 sm:h-96';

const Hero: FC<Props> = (props) => {
  const { title, variant } = props;

  return (
    <div
      className={
        (variant === 'homepage' ? homepageStyle : '') ||
        (variant === 'hr' ? hrStyle : '') ||
        (variant === 'photographies' ? photographiesStyle : '') ||
        (variant === 'pochoirs' ? pochoirsStyle : '') ||
        (variant === 'boulotsMixtes' ? boulotsMixtesStyle : '') ||
        (variant === 'cartons' ? cartonsStyle : '') ||
        (variant === 'aquarelles' ? aquarellesStyle : '')
      }
    >
      {title && (
        <h1 className='w-full py-8 text-4xl text-center bg-white bg-opacity-25 sm:px-20 sm:w-auto sm:text-6xl text-newYellow'>
          {title}
        </h1>
      )}
    </div>
  );
};

export default Hero;
