import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';
import { useForm } from 'react-hook-form';
import LandingPage from '../components/LandingPage';
import { useColorMode } from '@chakra-ui/react';

const Home = () => {
  return <LandingPage />;
};

export default Home;
