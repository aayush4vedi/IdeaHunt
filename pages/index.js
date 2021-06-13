import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';
import { useForm } from 'react-hook-form';
import LandingPage from '../components/LandingPage';
import { useColorMode } from '@chakra-ui/react';

const Home = () => {
  const auth = useAuth();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }
  // } = useForm();

  // const onSubmitSignup = ({ email, password }) => {
  //   auth.signupWithEmailAndPassword(email, password);
  // };
  // const onSubmitSignin = ({ email, password }) => {
  //   auth.signinWithEmailAndPassword(email, password);
  // };

  const { colorMode, toggleColorMode } = useColorMode();

  // <div className={styles.container}>
  //   <Head>
  //     <title>IdeaHunt</title>
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>

  // <main className={styles.main}>
  {
    /* {auth?.user ? (
        <>
          <p>Hi, {auth.user.email}</p>
          <button onClick={(e) => auth.signout()}>Sing Out</button>
        </>
      ) : (
        <>
          <button onClick={(e) => auth.signinWithGithub()}>
            Sing In With Github
          </button>
          <button onClick={(e) => auth.signinWithGoogle()}>
            Sing In With Google
          </button>

          <h3>signInWithEmailAndPassword</h3>
          <form onSubmit={handleSubmit(onSubmitSignin)}>
            <input defaultValue="test" {...register('email')} />

            <input {...register('password', { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </>
      )} */
  }
  // </main>
  // </div>

  return <LandingPage children={toggleColorMode} auth = {auth} />;
};

export default Home;
