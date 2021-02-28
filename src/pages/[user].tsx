import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperieceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { useRouter } from 'next/router';

interface HomeProps {
  user: string;
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export default function Home(props: HomeProps) {
  const router = useRouter();
  const { user } = router.query;
  const userName = String(user);
  
  return (
    <ChallengesProvider
      user={userName}
      level={props.level}
      currentExperience={props.currentExperience}
      completedChallenges={props.completedChallenges}
    >
      <div className={styles.container}>      
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, completedChallenges} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges)
    }
  }
}