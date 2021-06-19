import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';
import { useForm } from 'react-hook-form';
import LandingPage from '../components/LandingPage';
import { useColorMode } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('ideahunt-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>IdeaHunt | Home</title>
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
