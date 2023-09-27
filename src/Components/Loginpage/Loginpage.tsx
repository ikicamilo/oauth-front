import React from "react";
import googleImage from "../../assets/googleImage.png";
import githubImage from "../../assets/githubImage.png";
import twitterImage from "../../assets/twitterImage.png";
import styles from "./Loginpage.module.css";

export default function Loginpage() {
  const googleLogin = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };
  const githubLogin = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/github`, "_self");
  };
  const twitterLogin = () => {
    window.location.href = "http://localhost:4000/auth/twitter";
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleImage} alt="Google Icon" />
          <p>Login with Google</p>
        </div>

        <div
          className={`${styles.googleContainer} ${styles.githubContainer} `}
          onClick={githubLogin}
        >
          <img src={githubImage} alt="Github Icon" />
          <p>Login with Github</p>
        </div>

        <div
          className={`${styles.googleContainer} ${styles.twitterContainer} `}
          onClick={twitterLogin}
        >
          <img src={twitterImage} alt="Github Icon" />
          <p>Login with Twitter</p>
        </div>
      </div>
    </div>
  );
}
