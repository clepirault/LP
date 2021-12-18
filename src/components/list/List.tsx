import { FC, useState } from 'react';
import Image from 'next/image';
import { FaSearchPlus } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

type Props = {
  list: any[];
};

const List: FC<Props> = (props) => {
  const { list } = props;

  const [displayAlert, setDisplayAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isImageSelected, setIsImageSelected] = useState('');
  const [isImageAltSelected, setIsImageAltSelected] = useState('');

  const handleOpenImage = (url, alt) => {
    setIsOpen(true);
    setIsImageSelected(url);
    setIsImageAltSelected(alt);
  };

  const handleCloseImage = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='flex flex-col w-full px-4 gap-x-12 gap-y-32 sm:px-0 sm:grid sm:grid-cols-3'>
        {list.map((item, index) => (
          <div
            key={index}
            className='relative w-auto h-72'
            onMouseEnter={() => setDisplayAlert(true)}
            onMouseLeave={() => setDisplayAlert(false)}
          >
            <Image
              blurDataURL={item.data.image.url}
              src={item.data.image.url}
              alt={item.data.image.alt}
              layout='fill'
              objectFit='contain'
              placeholder='blur'
            ></Image>
            {displayAlert && (
              <span className='absolute inset-0 flex items-center justify-center text-xs'>
                <button
                  className='px-4 py-2 bg-white rounded bg-opacity-30 text-newYellow'
                  onClick={() =>
                    handleOpenImage(item.data.image.url, item.data.image.alt)
                  }
                >
                  Agrandir l&apos;image
                </button>
              </span>
            )}
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal isOpen={open} shouldCloseOnOverlayClick={true}>
          <button onClick={handleCloseImage} className='absolute top-2 right-2'>
            <AiOutlineClose className='text-2xl' />
          </button>
          <div className='relative w-auto h-[38rem]'>
            <Image
              blurDataURL={isImageSelected}
              src={isImageSelected}
              alt={isImageAltSelected}
              layout='fill'
              objectFit='contain'
              placeholder='blur'
            ></Image>
          </div>
        </Modal>
      )}
    </>
  );
};

export default List;
