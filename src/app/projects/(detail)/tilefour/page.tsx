import styles from "../layout.module.css";
import Minimeet from "../../_components/minimeet/Minimeet";
import Image from "next/image";
import Bottomnav from "../../_components/bottomnav/Bottomnav";

export default function TileFourProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Mini meet platform</p>
      <h1>Expanding Meets reach and improving velocity</h1>
      <div className={styles.hero}>
      <Image
          src="/graphicc.png"
          alt="text"
          fill
      />
      </div>
      <div className={styles.impact}>I led design for Mini Meet, the composable, flexible platform that supports Meet&apos;s large event partership with Brandlive, Google Chat Huddles, and picture in picture.
      </div>
      <Minimeet />

      <div className={styles.process}>
        <div className={styles.section}>Process</div>
        <p>
          Creating a strong parternship with engineering<br></br><br></br>
          Developing a strong technical understanding
          <br></br><br></br>
          Taking a platform first approach: Balancing specific product requirements with generalizability


        </p>
      </div>
      </div>
      <Bottomnav previous= "AI Notes" prevref= "/projects/tilethree" next='Prototyping workshop' nextref="/projects/tilefive"  />
    </>
  );
} 