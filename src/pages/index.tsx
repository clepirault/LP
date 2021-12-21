import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Section from '../components/sections/section/Section';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import News from '../components/sections/news/News';
import HomepageHero from '../components/sections/hero/HomepageHero';
import Head from 'next/head';

type Props = {
  news: string[];
};

const Home: NextPage<Props> = (props) => {
  const { news } = props;

  return (
    <>
      <Head>
        <title>Lionel Pirault</title>
        <meta
          name='description'
          content='Découvrir les oeuvres de Lionel Pirault'
        />
        <meta property='og:title' content='Lionel Pirault' />
      </Head>
      <body>
        <MainLayout link='/'>
          <HomepageHero title='Découvrir' />
          <Section title='actualités'>
            <News articles={news} />
          </Section>
        </MainLayout>
      </body>
    </>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'news'),
    {
      orderings: '[my.news.uid]',
    }
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
