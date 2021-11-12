import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <div className='bg-hero bg-no-repeat bg-contain opacity-80 sm:bg-cover w-full h-screen'>
          <h1>Hero block</h1>
        </div>
        <p>Articles block</p>
      </MainLayout>
    </div>
  );
};

export default Home;
