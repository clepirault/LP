import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Image from 'next/image';
import Title from '../components/title/Title';

type Props = {
  about: any;
};

const About: NextPage<Props> = (props) => {
  const { about } = props;

  const items = [{ label: "à propos de l'artiste" }];

  return (
    <div>
      <MainLayout>
        <Title variant='secondary'>{items[0].label}</Title>
        <div className='flex justify-center py-36'>
          <Image
            blurDataURL={about.image.url}
            src={about.image.url}
            alt={about.image.alt}
            width={600}
            height={800}
            placeholder='blur'
          />
        </div>
        <p>{about.description[0].text}</p>
      </MainLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.query(
    Prismic.Predicates.at('document.type', 'aboutpage')
  );

  const about = await res.results[0].data;

  return {
    props: {
      about,
    },
  };
}

export default About;
