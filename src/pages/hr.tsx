import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Image from 'next/image';
import Hero from '../components/sections/hero/Hero';

type Props = {
  list: any[];
};

const Hr: NextPage<Props> = (props) => {
  const { list } = props;

  return (
    <div>
      <MainLayout>
        <Hero variant='HR' />
        <h1>HR</h1>
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
      </MainLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.query(Prismic.Predicates.at('document.type', 'hr'));

  const list = await res.results.map((item) => {
    return item;
  });

  return {
    props: {
      list,
    },
  };
}

export default Hr;
