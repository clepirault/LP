import { FC } from 'react';
import Link from 'next/link';
import { FaChevronUp } from 'react-icons/fa';

type Props = {
  link: string;
};

const UpButton: FC<Props> = (props) => {
  const { link } = props;
  return (
    <Link href={link} passHref>
      <div className='fixed p-2 text-white bg-gray-200 rounded-full bottom-16 right-16'>
        <FaChevronUp />
      </div>
    </Link>
  );
};

export default UpButton;
