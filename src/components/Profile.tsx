import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import axios from 'axios';

import styles from '../styles/components/Profile.module.css';
import { useRouter } from 'next/router';

interface UserData {
  avatar_url: string;
  name: string;
}

export function Profile() {
  const { user, level } = useContext(ChallengesContext);
  
  const [userData, setUserData] = useState({} as UserData);
  
  async function getUser() {
    await axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        setUserData(res.data);
      })
      .catch((error:Error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  

  return (
    <div className={styles.profileContainer}>
      <img src={userData.avatar_url} alt={userData.name}/>
      <div>
        <strong>{userData.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  );
}