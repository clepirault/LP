import { FC } from 'react';
import Image from 'next/image';

type Props = {
  list: any[];
};

const List: FC<Props> = (props) => {
  const { list } = props;

  return (
    <div className='w-full flex flex-col gap-8 sm:grid sm:grid-cols-3'>
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
  );
};

export default List;
