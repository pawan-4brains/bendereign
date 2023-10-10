import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { useState, useEffect, Fragment } from "react";

function NavBar({ activeMenu, navbarClass, bgColor }) {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [userId, setUserId] = useState();

  const toggleMenu = () => {
    setMenuVisible((prevVisibility) => !prevVisibility);
    // if (isMobile) {
    //   setMenuVisible((prevVisibility) => !prevVisibility);
    // }
  };

  const hideMenu = () => {
    if (isMobile) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    // This will only run on the client side
    const localUserId = localStorage.getItem("userId");
    console.log(localUserId);
    setUserId(localUserId);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("mobile");
    localStorage.removeItem("fullname");
    setUserId();
  };

  return (
    <>
      <div className={`${styles[navbarClass]} ${bgColor}`}>
        <div className={styles.logoContainer}>
          <a href="#">
            <Image
              width={348}
              height={236}
              src="/images/logo.png"
              alt="Logo"
            ></Image>
          </a>
        </div>
        <div className={styles.menuButtonContainer} onClick={toggleMenu}>
          <Image src="/images/menu.png" width={100} height={100}></Image>
        </div>
        <div
          className={`${styles.menuContainer} ${
            isMenuVisible ? styles.menuVisible : ""
          }`}
        >
          <ul onClick={hideMenu}>
            {userId && (
              <li className={activeMenu === "PROFILE" ? styles.active : ""}>
                <Link href="/profile">PROFILE</Link>
              </li>
            )}

            <li className={activeMenu === "HOME" ? styles.active : ""}>
              <Link href="/">HOME</Link>
            </li>
            <li className={activeMenu === "EVENTS" ? styles.active : ""}>
              <Link href="/events">EVENTS</Link>
            </li>
            <li className={activeMenu === "MEDIA" ? styles.active : ""}>
              <Link href="/media">MEDIA</Link>
            </li>
            <li className={activeMenu === "MEMORY BOX" ? styles.active : ""}>
              <Link href="/memory-box">MEMORY BOX</Link>
            </li>
            {!userId && (
              <Fragment>
                <li
                  className={
                    activeMenu === "SIGNUP" ? styles.activeAuth : styles.authBtn
                  }
                >
                  <Link href="/signup">SIGN UP</Link>
                </li>
                <li
                  className={
                    activeMenu === "LOGIN" ? styles.activeAuth : styles.authBtn
                  }
                >
                  <Link href="/login">LOGIN</Link>
                </li>
              </Fragment>
            )}
            {userId && (
              <li className={styles.authBtn}>
                <Link href="" onClick={logout}>
                  LOGOUT
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
