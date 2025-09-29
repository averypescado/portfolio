"use client"
import styles from "./Chromefeedback.module.css"
import {useState} from "react";
import Image from "next/image";
import { CirclePlus } from 'lucide-react';


export default function Chromefeedback() {
    const [selected, setSelected] =useState(0)

    const images: Record<number, string> = {
        0: "/demo0.gif",
        1: "/demo1.png",
        2: "/demo2.png",
        3: "/demo3.png"
      };

      const set0 = () => {
        selected==0 ? setSelected(5) :
        setSelected(0);
      }

    const set1 = () => {
        selected==1 ? setSelected(5) :
        setSelected(1);
      }

    const set2 = () => {
        selected==2 ? setSelected(5) :
        setSelected(2);
    }

    const set3 = () => {
        selected==3 ? setSelected(5) :
        setSelected(3);
    }

    const set4 = () => {
        selected==4 ? setSelected(5) :
        setSelected(4);
    }

    return (
        <div className={styles.flex}>
            <div className={styles.column}>

            <div className={styles.feedback} onClick={set0}>
                <div><CirclePlus color="grey" size={18} /></div>
                <div>
                    <div><b>Overview</b></div>
                    {selected==0 ? 
                        <div>
                            <p> Required people to find the non-obvious entry point, and was limited once people were in it.</p>



                        </div>: null
                    }
                </div>


                    
            </div>
                <div className={styles.feedback} onClick={set1}>
                    <div><CirclePlus color="grey" size={18} /></div>
                    <div>
                        <div><b>Not flexible enough</b></div>

                        {selected==1 ? 
                            <div>
                                Fixed aspect ratio<br></br>
                                Small max size

                            </div>: null
                        }
                    </div>
                    
                </div>
                <div className={styles.feedback} onClick={set2}>
                    <div><CirclePlus color="grey" size={18} /></div>
                    <div>
                        <div><b>Not discoverable/contextual</b></div>
                        {selected==2 ? 
                            <div>
                            "Why do I have to select when presenting? Why doesn't it automatically apply?'

                            </div>: null
                        }
                    </div>
     
                </div>
                <div className={styles.feedback} onClick={set3}>
                    <div><CirclePlus color="grey" size={18} /></div>
                    <div>
                        <div><b>Limited feature set</b></div>
                        {selected==3 ? 
                                <div>
                                Only toggling audio and video and hangup.

                                </div>: null
                        }
                    </div>
                </div>

                <div className={styles.feedback} onClick={set4}>
                    <div><CirclePlus color="grey" size={18} /></div>

                    <div>
                            <div><b>One-off infrastructure</b></div>
                        {selected==4 ? 
                                <div>
                                Hard to build on and maintain

                                </div>: null
                            }
                        </div>


                    </div>
                    
                    
            </div>

            <div className={styles.demo}>
          <Image
            src={images[selected]}
            alt="Demo screenshot"
            fill   // key: makes it fill parent
            style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
          />
      </div>
           
        </div>
    )
}


