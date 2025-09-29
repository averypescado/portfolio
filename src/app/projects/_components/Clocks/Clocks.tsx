import Image from "next/image"
import styles from "./clocks.module.css"

export default function Clocks() {
    return (
        <div className={styles.clocks}>
            <div className={styles.clockGrid}>
                <div className={styles.clockItem}>
                    <Image
                        src="/clock1.png"
                        alt="Neumorphic Clock"
                        fill
                        className={styles.clockImage}
                    />
                </div>
                <div className={styles.clockItem}>
                    <Image
                        src="/clock2.png"
                        alt="Matrix Digital Clock"
                        fill
                        className={styles.clockImage}
                    />
                </div>
                <div className={styles.clockItem}>
                    <Image
                        src="/clock3.png"
                        alt="Moon Clock Interface"
                        fill
                        className={styles.clockImage}
                    />
                </div>
                <div className={styles.clockItem}>
                    <Image
                        src="/clock4.gif"
                        alt="Control Room Interface"
                        fill
                        className={styles.clockImage}
                    />
                </div>
            </div>
        </div>
    )
}