"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Nudgewidget.module.css";
import Image from "next/image";

export default function NudgeWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);



  return (
    <div className={styles.sideby}>
        <div className={styles.sect}>
            <div className={styles.head}> 
                <div className={styles.big}>
                    Doubled the click through rate
                </div>
                <div className={styles.body}>
                Twice as many people engage with this promo vs a standard one for the same feature
                </div>
            </div>
            
            <div className={styles.graph}>
                <div className={styles.row}>
                    <div className={styles.bar1}>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.bar2}>
                    </div>
                    <div className={styles.spacer}>
                    </div>
                </div>
            </div>
            

        </div>
        <div className={styles.divider}></div>

        <div className={styles.sect}>
            <div className={styles.head}> 
                <div className={styles.big}>
                    Double-digit increase in usage
                </div>
                <div className={styles.body}>
                    Directly drove an over 15% increase in overall feature usage
                </div>
            </div>
            <div className={styles.line}>
                <Image
                src="/grapp.png"
                alt="pic"
                fill

                />

            </div>
                
        </div>



    </div>
  );
}
