import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Hero from '../components/sections/hero/Hero';
import List from '../components/list/List';

type Props = {
  list: any[];
};

const Cartons: NextPage<Props> = (props) => {
  const { list } = props;

  return (
    <div>
      <MainLayout link='/cartons'>
        <Hero
          title='Cartons'
          image={list[5].data.image.url}
          alt={list[5].data.image.alt}
        />
        <List list={list} />
      </MainLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'cartons'),
    {
      orderings: '[my.cartons.uid]',
    }
  );

  const list = await res.results.map((item) => {
    return item;
  });

  return {
    props: {
      list,
    },
  };
}

export default Cartons;
