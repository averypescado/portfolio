"use client"
import styles from "./usecases.module.css"
import {useState} from "react";
import Image from "next/image";
import { CirclePlus } from 'lucide-react';



export default function UseCases() {
  const [selected, setSelected] =useState(0)



    return (
        <div className={styles.usecases}>
            <div className={styles.usecase}>
                <div className={styles.descpic}>
                <Image 
                width={200}
                height={400}
                src="/collab.jpg"
                alt="Picture of the author"
                className={styles.multi}
                />
                </div>

                <div className={styles.more}>Collaborating <CirclePlus color="grey" size={18} /></div>
            </div>

            <div className={styles.usecase}>
                <div className={styles.descpic}>
                <Image 
                width={200}
                height={400}
                src="/juggle.webp"
                alt="Picture of the author"
                className={styles.multi}
                />
                </div>

                <div className={styles.more}>Multitasking <CirclePlus color="grey" size={18} /></div>
            </div>

            <div className={styles.usecase}>
                <div className={styles.descpic}>
                <Image 
                width={200}
                height={400}
                src="/view.webp"
                alt="Picture of the author"
                className={styles.multi}
                />
                </div>

                <div className={styles.more}>Presenting <CirclePlus color="grey" size={18} /></div>
            </div>

        </div>
    )



}

{/* <div className={styles.usecases}>
<div className={styles.usecase}>
    <div className={styles.descpic}>
    <Image 
      width={200}
      height={200}
      src="/collab.jpg"
      alt="Picture of the author"
      className={styles.multi}
    />
    </div>

    <p>Collaborating</p>
  </div>
  <div className={styles.usecase}>
    <div className={styles.descpic}>
    <Image 
      width={200}
      height={200}
      src="/juggle.webp"
      alt="Picture of the author"
      className={styles.multi}
    />
    </div>

    <p>Multitasking</p>
  </div>
  <div className={styles.usecase}>
    <div className={styles.descpic}>
    <Image 
      width={200}
      height={200}
      src="/view.webp"
      alt="Picture of the author"
      className={styles.multi}
    />
    </div>

    <p>Presenting</p>
  </div>

</div> */}

