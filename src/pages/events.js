import Head from "next/head";
import Image from "next/image";
import { Raleway } from "next/font/google";
import styles from "@/styles/Events.module.css";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import AgeGate from "@/components/AgeGate";

const raleway = Raleway({ subsets: ["latin"] });

export default function Events() {
  const numberOfGalaxies = 84;

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
        <NavBar activeMenu={"EVENTS"} navbarClass={"navBarContainer"} />

        <div className={styles.section1}>
          <div className={styles.headerContainer}>
            <h1>
              <span className={styles.headerText}>Welcome to</span>
              <br />
              <span className={styles.headerText}>bendereign!</span>
            </h1>
          </div>
          <div className={styles.evenWrapper}>
            <div className={styles.eventCategory}>Bendereign Nights</div>
            <div className={styles.eventContainer}>
              <div className={styles.eventBox}>
                <div className={styles.eventImg}>
                  <img alt="Event" src="/images/event-1.png" />
                </div>
                <div className={styles.eventHeader}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventTitle}>Event Name</div>
                    <div className={styles.eventSubTitle}>
                      Most fonts have a particular weight which corresponds
                    </div>
                  </div>
                  <div className={styles.rightBox}>4 Days Left</div>
                </div>
                <div className={styles.eventDetailsWrapper}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/location.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Location</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/time.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Time</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/date.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Date</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/artist.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Artist names</div>
                    </div>
                    <div className={styles.eventMusic}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/music.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>
                        House, Tecno, Pop
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.entry}>Minimum Entry</div>
                    <div className={styles.price}>500 AED</div>
                  </div>
                </div>
                <div className={styles.eventActionContainer}>
                  <button>Book Tickets Now</button>
                  <button>
                    <Link href="/event-details">Know More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.eventBox}>
                <div className={styles.eventImg}>
                  <img alt="Event" src="/images/event-2.png" />
                </div>
                <div className={styles.eventHeader}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventTitle}>Event Name</div>
                    <div className={styles.eventSubTitle}>
                      Most fonts have a particular weight which corresponds
                    </div>
                  </div>
                  <div className={styles.rightBox}>4 Days Left</div>
                </div>
                <div className={styles.eventDetailsWrapper}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/location.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Location</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/time.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Time</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/date.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Date</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/artist.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Artist names</div>
                    </div>
                    <div className={styles.eventMusic}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/music.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>
                        House, Tecno, Pop
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.entry}>Minimum Entry</div>
                    <div className={styles.price}>500 AED</div>
                  </div>
                </div>
                <div className={styles.eventActionContainer}>
                  <button>Book Tickets Now</button>
                  <button>
                    <Link href="/event-details">Know More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.eventBox}>
                <div className={styles.eventImg}>
                  <img alt="Event" src="/images/event-1.png" />
                </div>
                <div className={styles.eventHeader}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventTitle}>Event Name</div>
                    <div className={styles.eventSubTitle}>
                      Most fonts have a particular weight which corresponds
                    </div>
                  </div>
                  <div className={styles.rightBox}>4 Days Left</div>
                </div>
                <div className={styles.eventDetailsWrapper}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/location.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Location</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/time.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Time</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/date.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Date</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/artist.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Artist names</div>
                    </div>
                    <div className={styles.eventMusic}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/music.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>
                        House, Tecno, Pop
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.entry}>Minimum Entry</div>
                    <div className={styles.price}>500 AED</div>
                  </div>
                </div>
                <div className={styles.eventActionContainer}>
                  <button>Book Tickets Now</button>
                  <button>
                    <Link href="/event-details">Know More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.eventBox}>
                <div className={styles.eventImg}>
                  <img alt="Event" src="/images/event-2.png" />
                </div>
                <div className={styles.eventHeader}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventTitle}>Event Name</div>
                    <div className={styles.eventSubTitle}>
                      Most fonts have a particular weight which corresponds
                    </div>
                  </div>
                  <div className={styles.rightBox}>4 Days Left</div>
                </div>
                <div className={styles.eventDetailsWrapper}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/location.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Location</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/time.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Time</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/date.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Date</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/artist.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Artist names</div>
                    </div>
                    <div className={styles.eventMusic}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/music.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>
                        House, Tecno, Pop
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.entry}>Minimum Entry</div>
                    <div className={styles.price}>500 AED</div>
                  </div>
                </div>
                <div className={styles.eventActionContainer}>
                  <button>Book Tickets Now</button>
                  <button>
                    <Link href="/event-details">Know More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.eventBox}>
                <div className={styles.eventImg}>
                  <img alt="Event" src="/images/event-1.png" />
                </div>
                <div className={styles.eventHeader}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventTitle}>Event Name</div>
                    <div className={styles.eventSubTitle}>
                      Most fonts have a particular weight which corresponds
                    </div>
                  </div>
                  <div className={styles.rightBox}>4 Days Left</div>
                </div>
                <div className={styles.eventDetailsWrapper}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/location.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Location</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/time.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Time</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/date.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Date</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/artist.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Artist names</div>
                    </div>
                    <div className={styles.eventMusic}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/music.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>
                        House, Tecno, Pop
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.entry}>Minimum Entry</div>
                    <div className={styles.price}>500 AED</div>
                  </div>
                </div>
                <div className={styles.eventActionContainer}>
                  <button>Book Tickets Now</button>
                  <button>
                    <Link href="/event-details">Know More</Link>
                  </button>
                </div>
              </div>
              <div className={styles.eventBox}>
                <div className={styles.eventImg}>
                  <img alt="Event" src="/images/event-2.png" />
                </div>
                <div className={styles.eventHeader}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventTitle}>Event Name</div>
                    <div className={styles.eventSubTitle}>
                      Most fonts have a particular weight which corresponds
                    </div>
                  </div>
                  <div className={styles.rightBox}>4 Days Left</div>
                </div>
                <div className={styles.eventDetailsWrapper}>
                  <div className={styles.leftBox}>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/location.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Location</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/time.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Time</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/date.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Date</div>
                    </div>
                    <div className={styles.eventDetailsBox}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/artist.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>Artist names</div>
                    </div>
                    <div className={styles.eventMusic}>
                      <div className={styles.detailsIcon}>
                        <Image
                          width={100}
                          height={100}
                          src="/images/music.png"
                        ></Image>
                      </div>
                      <div className={styles.detailsValue}>
                        House, Tecno, Pop
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.entry}>Minimum Entry</div>
                    <div className={styles.price}>500 AED</div>
                  </div>
                </div>
                <div className={styles.eventActionContainer}>
                  <button>Book Tickets Now</button>
                  <button>
                    <Link href="/event-details">Know More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
