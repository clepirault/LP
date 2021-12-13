import { FC, useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  list: any[];
};

const List: FC<Props> = (props) => {
  const { list } = props;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex flex-col w-full px-4 gap-x-12 gap-y-32 sm:px-0 sm:grid sm:grid-cols-3'>
          {list.map((item, index) => (
            <div key={index} className='relative w-auto h-72'>
              <Image
                src={item.data.image.url}
                alt={item.data.image.alt}
                layout='fill'
                objectFit='contain'
              ></Image>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default List;
