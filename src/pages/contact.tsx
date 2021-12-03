import type { NextPage } from 'next';
import ContactForm from '../components/form/ContactForm';
import MainLayout from '../components/layouts/MainLayout';

const Contact: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <ContactForm
          firstname='Votre prénom'
          lastname='Votre nom'
          email='Votre email'
          subject='Objet'
          message='Votre message'
        />
      </MainLayout>
    </div>
  );
};

export default Contact;
