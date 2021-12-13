import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Hero from '../components/sections/hero/Hero';
import List from '../components/list/List';

type Props = {
  list: any[];
};

const Photographies: NextPage<Props> = (props) => {
  const { list } = props;

  return (
    <>
      {!list ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MainLayout>
            <Hero title='Photographies' variant='photographies' />
            <List list={list} />
          </MainLayout>
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'photographies'),
    { orderings: '[my.photographies.uid]' }
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

export default Photographies;
