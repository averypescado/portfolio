"use client"
import styles from "./minimeet.module.css"
import Image from "next/image"; 

import {useState} from "react";



export default function Minimeet() {
    const [selected, setSelected] =useState(0)

    const getMenuItemClass = (index: number): string => {
      return selected === index 
          ? `${styles.menuItem} ${styles.active}` 
          : styles.menuItem;
    }

    const setBrandlive = () => {
      setSelected(0);
    }

    const setChat = () => {
      setSelected(1);
    }

    const setChrome = () => {
      setSelected(2);
    }

    function Brandlive() {
      return (
        <div className={styles.content}>
          <p>
            <b>The Meet and Brandlive partnership gives Meet customers a solution for hosting online events with up to one million participants. </b>
            I worked with Brandlive to understand their product and large event needs, and collaborated with the Meet team on platform first ways to make a great large event experience.
          </p>
          <video
                width="800"
                height="450"
                controls
                preload="metadata">
              <source src="/Brandlive.mp4" type="video/mp4" />

          </video>
          
        </div>
      )
    }

    function Chat() {
      return (
        <div className={styles.content}>
          <p>
            <b>Huddles in Google Chat supports quick, audio first conversations.</b> The launch of this feature led to a 20% increase in the number of meetings people were having. 
          </p>
          <div className={styles.chat}>
            <Image
              src="/startinghuddleingooglechat.gif"
              alt="start huddle"
              fill
              className={styles.chatimage}
            />

          </div>
 
          
        </div>
      )
    }

    function Chrome() {
      return (
        <div className={styles.content}>
          <p>
            <b>Chrome picture in picture enables seamless presenting and multitasking from Meet</b> It has millions of daily active users. I go into more details here.

          </p>
          <div className={styles.pip}>
            <Image
              src="/bgtile1.png"
              alt="start huddle"
              fill
              className={styles.pipimage}
            />

          </div>
 
          
        </div>
      )
    }

  return (
    <div className={styles.demo}>
        <ul className={styles.cases}>
          <li onClick={setBrandlive} className={getMenuItemClass(0)}>Brandlive events</li>
          <li onClick={setChat} className={getMenuItemClass(1)}>Google Chat</li>
          <li onClick={setChrome} className={getMenuItemClass(2)}>Chrome picture in picture</li>
        </ul>

        <div className={styles.interac}>
          {selected == 0 ? <Brandlive /> : null}
          {selected == 1 ? <Chat /> : null}
          {selected == 2 ? <Chrome /> : null}
        </div>
    </div>

  );
} 