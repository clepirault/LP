import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from '../../title/Title';

type Props = {
  articles: string[];
};

const News: FC<Props> = (props) => {
  const { articles } = props;

  return (
    <div className='w-full sm:grid sm:grid-cols-3'>
      {articles.map((article: any, index: number) => (
        <div key={index} className='flex flex-col items-center'>
          <Image
            blurDataURL={article.data.image.url}
            src={article.data.image.url}
            alt={article.data.image.src}
            width={300}
            height={400}
            placeholder='blur'
          />
          <Title variant='article'>{article.data.title[0].text}</Title>
          <p>{article.data.description[0].text}</p>
          {article.data.link.url !== undefined && (
            <span className='text-gray-400 hover:underline'>
              <Link href={article.data.link.url}>Cliquez ici</Link>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default News;
