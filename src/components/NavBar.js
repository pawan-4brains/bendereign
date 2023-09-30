import styles from "@/styles/NavBar.module.css";
import Image from "next/image";

function NavBar({ bgColor }) {
  return (
    <>
      <div className={`${styles.navBarContainer} ${bgColor}`}>
        <div className={styles.logoContainer}>
          <a href="">
            <Image width={348} height={236} src="/images/logo.png"></Image>
          </a>
        </div>
        <div className={styles.menuContainer}>
          <ul>
            <li>PROFILE</li>
            <li className={styles.active}>HOME</li>
            <li>EVENTS</li>
            <li>MEDIA</li>
            <li>MEMORY BOX</li>
            <li className={styles.authBtn}>SING UP</li>
            <li className={styles.authBtn}>LOGIN</li>
            <li className={styles.authBtn}>LOGOUT</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
