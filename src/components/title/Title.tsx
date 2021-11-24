import { FC, ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  link?: string;
  variant?: 'main' | 'secondary' | 'article' | 'hero';
};

const mainStyle = 'font-bold uppercase text-3xl';
const secondaryStyle = 'font-bold uppercase text-xl';
const articleStyle = 'font-bold text-xl my-4';
const heroStyle = '';

const Title: FC<Props> = (props) => {
  const { children, link, variant } = props;
  return (
    <h1
      className={
        (variant === 'main' ? mainStyle : '') ||
        (variant === 'secondary' ? secondaryStyle : '') ||
        (variant === 'article' ? articleStyle : '') ||
        (variant === 'hero' ? heroStyle : '')
      }
    >
      {link ? <Link href={link}>{children}</Link> : children}
    </h1>
  );
};

export default Title;
