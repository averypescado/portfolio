import styles from "./quotes.module.css";
import Image from "next/image";

export default function Quotes() {
  return (
    <div className={styles.quotes}>
      <div className={styles.quote}>
        <div className={styles.general}>
          My wife just discovered Auto Pip and stopped me from working to tell me
          how AMAZING it IS. This is so much better than resizing the browser.
        </div>
        <div className={styles.attribution}>
          <div className={styles.head}>
            <Image 
              src="/face1.png"
              fill
              alt="Demo screenshot"
              style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
              />

          </div>
          <p>Bob Frazier</p>
        </div>
      </div>

      <div className={styles.quote}>
        <div className={styles.general}>
          I love picture in picture for Meet because I am able to multitask—
          doing my work and still being engaged with the meetings I sit in on.
        </div>
        <div className={styles.attribution}>
          <div className={styles.head}>
              <Image 
                src="/face2.png"
                fill
                alt="Demo screenshot"
                style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
                />

            </div>
          <p>Bob Frazier</p>
        </div>
      </div>
    </div>
  );
}
