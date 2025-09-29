import Clocks from "../../_components/Clocks/Clocks";
import styles from "../layout.module.css";
import Image from "next/image";
import Bottomnav from "../../_components/bottomnav/Bottomnav";

export default function TileFiveProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Leadership</p>
      <h1>Teaching my teammates to make React prototypes</h1>
      <div className={styles.hero}>
      <Image
          src="/workshop.jpg"
          alt="text"
          fill
        />
      </div>
      <div className={styles.impact}>I led a workshop with ~40 teammates where everybody created and published a React prototype in an hour. Most people had never written code. They created some impressive things!
      </div>
      <Clocks />
      <div className={styles.process}>
        <div className={styles.section}>Process</div>
        <p>
        As I wrote in LINK I find prototyping in code very valuable, and it is a key part of my process. I regularly use workspace apis to use real data, use actual video feeds, have a more realistic experience in the browser.
        <br></br><br></br>

Teammates had seen my prototypes and many had reached out asking if I could teach them how they could do the same. After teaching a few people in 1:1 sessions, I made a reference doc for people getting started. Then, at our last team summit, I led a workshop where everybody got setup, and published their first React app in an hour.
<br></br><br></br>
Since the initial workshop, Ive added more chapters to the resource, including how to enable and use Workspace APIs

        </p>
      </div>
      </div>
      <Bottomnav previous= "Minimeet platform" prevref= "/projects/tilefour"   />
    </>
  );
} 