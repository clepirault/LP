import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Hero from '../components/sections/hero/Hero';
import Section from '../components/sections/section/Section';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import News from '../components/sections/news/News';

type Props = {
  news: string[];
};

const Home: NextPage<Props> = (props) => {
  const { news } = props;

  return (
    <div>
      <MainLayout>
        <Hero variant='homepage' title='Découvrir' />
        <Section title='actualités'>
          <News articles={news} />
        </Section>
      </MainLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'news')
  );

  const news = await res.results.map((article) => {
    return article;
  });

  return {
    props: {
      news,
    },
  };
}

export default Home;
