import { FC } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer: FC = () => {
  return (
    <footer>
      <span className='flex items-baseline'>
        <AiOutlineCopyrightCircle />
        <p>COPYRIGHT 2021 | Tous Droits Réservés | All Rights Reserved</p>
      </span>
    </footer>
  );
};

export default Footer;
