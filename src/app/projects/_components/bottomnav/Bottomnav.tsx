import styles from "./bottomnav.module.css";
import Link from "next/link";

interface Props {
    previous?: string; // or whatever type 'previous' should be
    prevref?:string;
    next?: string; // optional prop
    nextref?: string;
    
  }

export default function Bottomnav({previous, prevref, next, nextref}: Props) {
    return (
        <div className={styles.bar}>
            {previous && prevref ?
                    <Link href={prevref} >
                        <div className={styles.prev}>
                            <div className={styles.swatch}>
                            </div>
                                <div>
                                    <p>previous</p>
                                    <p>{previous}</p>
                                </div>


                        </div>
                    </Link>
            :null}

            {next && nextref ?
                <Link href={nextref}>
                    <div className={styles.next}>
                        <div className={styles.swatch}>
                            
                        </div>
                        <div>
                            <p>next</p>
                            <p>{next}</p>
                        </div>

                    </div>
                </Link>
            
            :null}
            
        </div>
    )
}