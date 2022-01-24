import { FC } from "react";
import Image from "next/image";

type Props = {
  alt?: string;
  image?: any;
  title?: string;
};

const Hero: FC<Props> = (props) => {
  const { alt, image, title } = props;

  return (
    <div className="relative w-full h-32 mt-20 mb-32 sm:h-96 sm:mt-0">
      {image && (
        <Image
          blurDataURL={image}
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      )}
      {title && (
        <div className="absolute flex items-center justify-center inset-1/2">
          <h1 className="px-4 py-2 text-4xl text-center bg-white bg-opacity-30 sm:py-8 sm:px-20 sm:text-6xl text-newYellow">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
