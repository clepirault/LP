import { FC } from "react";

import { BsChevronCompactDown } from "react-icons/bs";

type Props = {
  title: string;
};

const HomepageHero: FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className="relative flex items-start w-full h-screen mb-16 bg-[#24231f] bg-no-repeat bg-cover bg-right sm:bg-center opacity-90 bg-homepage sm:bg-cover sm:h-screen">
      <h1 className="hidden w-auto py-8 text-6xl text-center bg-white bg-opacity-25 sm:block sm:px-20 text-newYellow">
        {title}
      </h1>
      <button className="absolute bottom-0 flex justify-center w-full mb-16 animate-bounce sm:hidden">
        <BsChevronCompactDown className="text-6xl text-newYellow" />
      </button>
    </div>
  );
};

export default HomepageHero;
