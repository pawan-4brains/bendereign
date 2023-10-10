import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/MemoryBox.module.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import AgeGate from "@/components/AgeGate";
import { useState, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const raleway = Raleway({ subsets: ["latin"] });

export default function MemoryBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
    "/images/event-1.png",
  ];

  const IMAGES_PER_VIEW = 8;

  const displayedImages = images.slice(
    currentIndex,
    currentIndex + IMAGES_PER_VIEW
  );

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - IMAGES_PER_VIEW, 0));
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + IMAGES_PER_VIEW;

      if (nextIndex >= images.length) {
        return images.length - IMAGES_PER_VIEW;
      }
      return nextIndex;
    });
  };

  return (
    <>
      <Head>
        <title>Events | Bendereign</title>
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
        <NavBar activeMenu={"MEMORY BOX"} navbarClass={"navBarContainer"} />
        <div className={styles.section1}>
          <div className={styles.memoryBoxContainer}>
            <div className={styles.arrowContainer} onClick={moveLeft}>
              {currentIndex > 0 && (
                <Image
                  src="/images/arrow-left.png"
                  width={63}
                  height={63}
                  alt="Arrow Left"
                />
              )}
            </div>

            <TransitionGroup className={styles.memoryBox}>
              <CSSTransition
                key={currentIndex}
                timeout={50}
                classNames={{
                  enter: styles.slideEnter,
                  enterActive: styles.slideEnterActive,
                  exit: styles.slideExit,
                  exitActive: styles.slideExitActive,
                }}
              >
                <Fragment>
                  <div className={styles.part1Container}>
                    <div className={styles.part1Box}>
                      <Image
                        src={displayedImages[0] || ""}
                        width={1024}
                        height={1408}
                      />
                    </div>
                  </div>
                  {displayedImages[1] && (
                    <div className={styles.part2Container}>
                      {displayedImages.slice(1, 3).map((src, idx) => (
                        <div key={idx} className={styles.part2Box}>
                          <Image src={src} width={1024} height={1408} />
                        </div>
                      ))}
                    </div>
                  )}
                  {displayedImages[3] && (
                    <div className={styles.part3Container}>
                      {displayedImages.slice(3, 7).map((src, idx) => (
                        <div key={idx} className={styles.part3Box}>
                          <Image src={src} width={1024} height={1408} />
                        </div>
                      ))}
                    </div>
                  )}
                  {displayedImages[7] && (
                    <div className={styles.part4Container}>
                      <div className={styles.part4Box}>
                        <Image
                          src={displayedImages[7] || ""}
                          width={1024}
                          height={1408}
                        />
                      </div>
                    </div>
                  )}
                </Fragment>
              </CSSTransition>
            </TransitionGroup>

            <div className={styles.arrowContainer} onClick={moveRight}>
              {currentIndex + IMAGES_PER_VIEW < images.length && (
                <Image
                  src="/images/arrow-right.png"
                  width={63}
                  height={63}
                  alt="Arrow Right"
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
