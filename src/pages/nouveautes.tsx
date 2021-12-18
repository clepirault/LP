import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Hero from '../components/sections/hero/Hero';
import List from '../components/list/List';
import Section from '../components/sections/section/Section';

type Props = {
  list: any[];
};

const Nouveautes: NextPage<Props> = (props) => {
  const { list } = props;
  console.log(list);

  return (
    <div>
      <MainLayout>
        <Hero
          title='Nouveautés'
          image={list[4].data.image.url}
          alt={list[4].data.image.alt}
        />
        <Section title='Nouveautés cartons'>
          <List list={list} />
        </Section>
      </MainLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'nouveautes')
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

export default Nouveautes;
