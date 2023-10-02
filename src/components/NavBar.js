import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar({ activeMenu, bgColor }) {
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
            <li className={activeMenu === "PROFILE" ? styles.active : ""}>
              <Link href="/profile">PROFILE</Link>
            </li>

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

            <li className={styles.authBtn}>
              <Link href="/signup">SIGN UP</Link>
            </li>

            <li className={styles.authBtn}>
              <Link href="/login">LOGIN</Link>
            </li>

            <li className={styles.authBtn}>
              <Link href="/logout">LOGOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
