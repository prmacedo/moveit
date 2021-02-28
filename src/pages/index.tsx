import { useState } from 'react';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const [user, setUser] = useState('');
  
  return (
    <div className={styles.container}>
      <div className={styles.empty}></div>
      <div className={styles.login}>
        <img src="logo-full-white.svg" alt="move.it"/>

        <h1>Bem-vindo</h1>

        <div className={styles.github}>
          <img src="icons/github.svg" alt="Github"/>
          <p>Faça login com o seu Github para começar</p>
        </div>

        <div className={styles.form}>
          <form action={`/${user}`} method="post">
            <input type="text" name="user" id="user" autoComplete="off" value={user} onChange={(event) => {setUser(event.target.value)}}/>
            <button type="submit">
              <img src="/icons/button-login.svg" alt="Entrar"/>
            </button>          
          </form>
        </div>
      </div>
    </div>
  );
}