import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import Image from 'next/image';
import Title from '../components/title/Title';
import Hero from '../components/sections/hero/Hero';
import artisteImage from '../../public/artiste.png';

type Props = {
  about: any;
};

const About: NextPage<Props> = (props) => {
  const { about } = props;
  console.log(about);

  const items = [{ label: "à propos de l'artiste" }];

  return (
    <div>
      <MainLayout>
        <Hero title='A propos' image={artisteImage} alt='artiste' />
        <Title variant='secondary'>{items[0].label}</Title>
        <div className='grid mt-20 sm:grid-cols-2'>
          <div className='grid gap-3 px-6'>
            <p className='text-justify'>{about.description[0].text}</p>
            <p className='text-justify'>{about.description[1].text}</p>
            <p className='text-justify'>{about.description[2].text}</p>
            <p className='text-justify'>{about.description[3].text}</p>
            <p className='text-justify'>{about.description[4].text}</p>
            <p className='pt-16 text-right text-gray-400'>
              {about.description[5].text}
            </p>
          </div>
          <div className='relative h-[34rem]'>
            <Image
              blurDataURL={about.image.url}
              src={about.image.url}
              alt={about.image.alt}
              layout='fill'
              objectFit='contain'
              placeholder='blur'
            />
          </div>
        </div>
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
