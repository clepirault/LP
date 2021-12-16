import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';

type Props = {
  list: any[];
};

const Nouveautes: NextPage<Props> = (props) => {
  const { list } = props;

  return (
    <div>
      <MainLayout>
        <h1>Nouveautés</h1>
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

export default Nouveautes;
