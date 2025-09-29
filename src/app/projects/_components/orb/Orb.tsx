"use client"
import styles from "./orb.module.css"

import {useState} from "react";

export default function Orb() {
    const [selected, setSelected] =useState(1)


  return (
    <div className={styles.container}>
        <div className={styles.orb}>
          Avery fisher
 

        </div>
    </div>


  );
} 