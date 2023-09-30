import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const numberOfGalaxies = 84;

  return (
    <>
      <Head>
        <title>Home | Bendereign</title>
        <meta name="description" content="Bendereign" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={`${raleway.className}`}>
        <NavBar bgColor={styles.navBarBG1} />

        <div className={styles.section1}>
          <div className={styles.galaxyContainer}>
            {Array.from({ length: numberOfGalaxies }).map((_, index) => (
              <div key={index} className={styles.galaxyBox}>
                <Image
                  width={100}
                  height={100}
                  src="/images/galaxy.png"
                ></Image>
              </div>
            ))}
          </div>
          <div className={styles.headerContainer}>
            <h1>
              <span className={`${styles.headerText} ${styles.text1}`}>
                Welcome to
              </span>
              <br />
              <span className={`${styles.headerText} ${styles.text2}`}>
                bendereign!
              </span>
            </h1>
          </div>
          <div className={styles.gr1}></div>
        </div>
        <div className={styles.section2}>
          <div className={styles.box1}>
            <div className={styles.header}>
              How Bendereign
              <br />
              Universe Started?
            </div>
            <div className={styles.description}>
              Our Mission is to inspire, entertain, and enrich lives through the
              power of music. We believe that music has the ability to transcend
              boundaries, evoke emotions, and create meaningful connections
              among people from diverse backgrounds.
            </div>
            <div className={styles.boxImage}>
              <img src="/images/section-2-1.png" alt="Section 2 1" />
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.header}>Bender + reign</div>
            <div className={styles.description}>
              Music has surreal capability to bend the reality. With Reign
              adding to bender, we have vision to Reign the world with unique
              artist line up and music with multi-genre music festival.
            </div>
            <div className={styles.boxImage}>
              <img src="/images/section-2-1.png" alt="Section 2 1" />
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.boxWrapper}>
            <div className={styles.box1}>
              <div className={styles.header}>
                Welcome the
                <br />
                big galactic wave
              </div>
              <div className={styles.description}>
                To be the celebrated music IP in the world, born in Dubai..
                Traveling the World.
              </div>
              <div className={styles.imgContainer}>
                <div className={styles.imgBox}>
                  <img src="/images/section-3-1.png" alt="Container" />
                </div>
                <div className={styles.imgBox}>
                  <img src="/images/section-3-2.png" alt="Container" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.galaxyContainer}>
            {Array.from({ length: numberOfGalaxies }).map((_, index) => (
              <div key={index} className={styles.galaxyBox}>
                <Image
                  width={100}
                  height={100}
                  src="/images/galaxy.png"
                ></Image>
              </div>
            ))}
          </div>
          <div className={styles.box2}>
            <div className={styles.header}>BendereignNights</div>
            <div className={styles.description}>
              Bendereign Nights cater to weekend revelers, spanning over 10
              consecutive Saturdays starting from September 23rd, 2023. The
              event will be graced by four talented DJs, featuring a local UAE
              talent as the opening act, followed by an international artist,
              and concluding with a closing DJ performance.
              <br />
              <br /> Anticipating an attendance of 1,000 to 1,500 participants.
            </div>
          </div>
          <div className={styles.box3}>
            <div className={styles.menuContainer}>
              <div className={styles.header}>MENU</div>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </div>
            <div className={styles.contactUsContainer}>
              <div className={styles.header}>CONTACT US</div>
              <div className={styles.companyName}>BENDEREIGN L.L.C</div>
              <div className={styles.phoneContainer}>
                <div className={styles.iconContainer}>
                  <Image
                    width={100}
                    height={100}
                    src="/images/phone.png"
                  ></Image>
                </div>
                <div className={styles.phone}>
                  <a href="tel:+971 56 778 6926">+971 56 778 6926</a>
                </div>
              </div>
              <div className={styles.emailContainer}>
                <div className={styles.iconContainer}>
                  <Image
                    width={100}
                    height={100}
                    src="/images/email.png"
                  ></Image>
                </div>
                <div className={styles.email}>
                  <a href="mailto:hello@bendereign.com">hello@bendereign.com</a>
                </div>
              </div>
              <div className={styles.addressContainer}>
                <div className={styles.iconContainer}>
                  <Image width={100} height={100} src="/images/map.png"></Image>
                </div>
                <div className={styles.address}>
                  Level 6B, Rolex Tower, Sheikh Zayed Road, Near Financial
                  Centre Metro, DIFC, Dubai - United Arab Emirates
                </div>
              </div>
              <div className={styles.socialMediaContainer}>
                <a href="">
                  <Image
                    width={100}
                    height={100}
                    src="/images/linkedin.png"
                  ></Image>
                </a>
                <a href="">
                  <Image
                    width={100}
                    height={100}
                    src="/images/insta.png"
                  ></Image>
                </a>
              </div>
            </div>
            <div className={styles.contactFormContainer}>
              <div className={styles.header}>
                FOR ANY INFORMATION CONTACT US
              </div>
              <div className={styles.formWrapper}>
                <form action="">
                  <div className={styles.formGroup}>
                    <input type="text" placeholder="First Name*" />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="text" placeholder="Last Name*" />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="email" placeholder="Email*" />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="text" placeholder="Mobile No.*" />
                  </div>
                  <div className={styles.formGroup}>
                    <textarea name=""></textarea>
                  </div>
                  <div className={`${styles.formGroup} ${styles.buttonRight}`}>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section4}>© 2023 by Bendereign L.L.C</div>
      </main>
    </>
  );
}
