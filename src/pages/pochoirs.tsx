import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Image from 'next/image';
import Hero from '../components/sections/hero/Hero';

type Props = {
  list: any[];
};

const Pochoirs: NextPage<Props> = (props) => {
  const { list } = props;

  return (
    <div>
      <MainLayout>
        <Hero title='Pochoirs' variant='pochoirs' />
      </MainLayout>
    </div>
  );
};

/* export async function getStaticProps() {
  const res = await client.query(Prismic.Predicates.at('document.type', 'hr'));

  const list = await res.results.map((item) => {
    return item;
  });

  return {
    props: {
      list,
    },
  };
} */

export default Pochoirs;
