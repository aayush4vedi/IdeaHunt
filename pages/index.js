import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { auth } from 'firebase';
import { useAuth } from '../lib/auth';

const Home = () => {
  //use auth hook created
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>IdeaHunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>IdeaHunt</h1>

        <p className={styles.description}>
          Incubator for ideas, discussion & solutions around it.
        </p>

        {auth?.user ? (
          <>
            <p>Hi, { auth.user.displayName }</p>
            <button onClick={(e) => auth.signout()}>Sing Out</button>
          </>
        ) : (
          <button onClick={(e) => auth.signinWithGithub()}>Sing In</button>
        )}
      </main>
    </div>
  );
};

export default Home;
