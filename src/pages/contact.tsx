import type { NextPage } from 'next';
import ContactForm from '../components/form/ContactForm';
import MainLayout from '../components/layouts/MainLayout';
import Hero from '../components/sections/hero/Hero';
import contactImage from '../../public/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';

const Contact: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <Hero title="Contactez l'artiste" image={contactImage} alt='contact' />
        {/* <ContactForm
          firstname='Votre prénom'
          lastname='Votre nom'
          email='Votre email'
          subject='Objet'
          message='Votre message'
        /> */}
        <p className='inline-flex items-end justify-center w-full text-center'>
          Cette page sera bientôt disponible.
          <br /> En attendant vous pouvez contacter l&apos;artiste en lui
          écrivant un email.
          <a
            href='mailto:plionel254@gmail.com'
            className='flex items-baseline gap-1 px-1 text-gray-400 hover:underline'
          >
            Contact <AiOutlineMail />
          </a>
        </p>
        <div className='h-16'></div>
      </MainLayout>
    </div>
  );
};

export default Contact;
