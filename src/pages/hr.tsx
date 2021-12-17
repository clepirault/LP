import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Hero from '../components/sections/hero/Hero';
import List from '../components/list/List';

type Props = {
  list: any[];
};

const Hr: NextPage<Props> = (props) => {
  const { list } = props;

  return (
    <div>
      <MainLayout link='/hr'>
        <Hero
          title='HR'
          image={list[6].data.image.url}
          alt={list[6].data.image.alt}
        />
        <List list={list} />
      </MainLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.query(Prismic.Predicates.at('document.type', 'hr'), {
    orderings: '[my.hr.uid]',
  });

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
