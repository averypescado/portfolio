import Link from "next/link";
import styles from "./page.module.css";
import OrbReveal from "./projects/_components/orb/OrbReveal";

export default function Home() {
  return (
    <>
      {/* Show Orb after scrolling 240px */}
      <OrbReveal threshold={240} />
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
      <main className={styles.main}>
        <div className={styles.flex}>
            <h1 className={styles.heading}>Avery Fisher</h1>
            <p className={styles.paragraph}>Designer that loves to code</p>
        </div>

        <div className={styles.blurb}>
        I love understanding technical details and prototyping in code. I've shipped large, cross product features used by millions at <span className={styles.bubble}>Google Meet</span>, and features that are critical toschool district administrators work at <span className={styles.bubble}>Informedk12</span>.
        <br></br>
        <br></br>
        Currently I am focused on how AI can make meetings better, before, during, and after.
        </div>

        <div className={styles.currently}>
          <div className={styles.container}>
            <div className={styles.flexside}>
              <img src="/meetlogo.png" alt="Google Meet Logo" width={24} height={24} />
              <div className={styles.logomark}>Google Meet</div>
            </div>
            <div className={styles.tiles}>
              <Link href="/projects/tileone" className={`${styles.tileone} ${styles.tile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.description}>
                  <div className={styles.subtitle}>
                    Chrome pip
                  </div>
                  <div className={styles.title}>
                    Seamless presenting and multitasking
                  </div>
                </div>
              </Link>
              <Link href="/projects/tiletwo" className={`${styles.tiletwo} ${styles.tile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.thumbnail}>
              </div>
                <div className={styles.description}>
                  <div className={styles.subtitle}>
                    Working in AI
                  </div>
                  <div className={styles.title}>
                    Reflections, since I cant share what I'm currently working on.
                  </div>
                </div>
              </Link>
              <Link href="/projects/tilethree" className={`${styles.tilethree} ${styles.tile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <div className={styles.badge}>
                  Launched 🚀
                </div> */}
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.description}>
                  <div className={styles.subtitle}>
                    Take notes with Gemini
                  </div>
                  <div className={styles.title}>
                    Helping people who cant make the meeting
                  </div>
                </div>
              </Link>
              <Link href="/projects/tilefour" className={`${styles.tilefour} ${styles.tile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <div className={styles.badge}>
                  Launched 🚀
                </div> */}
                <div className={styles.thumbnail}>
                </div>

                <div className={styles.description}>
                  <div className={styles.subtitle}>
                    Mini meet platform
                  </div>
                  <div className={styles.title}>
                    Expanding Meets reach and improving developer velocity
                  </div>
                </div>
              </Link>
              <Link href="/projects/tilefive" className={`${styles.tilefive} ${styles.tile}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <div className={styles.badge}>
                  Workshop 🎤
                </div> */}
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.description}>
                  <div className={styles.subtitle}>
                    Leadership
                  </div>
                  <div className={styles.title}>
                    Empowering teammates to make more interactive prototypes
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>


<div className={styles.previously}>
          <div className={styles.flexside}>
                <img src="/iktwelve.jpg" alt="Google Meet Logo" width={24} height={24} />
                <div className={styles.logomark}>Informedk12</div>
          </div>
          <div className={`${styles.informedtile} ${styles.tile}`}>
            


          </div>


</div>


      </main>
    </>
  );
}
