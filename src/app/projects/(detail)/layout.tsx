import Link from "next/link";
import styles from "./layout.module.css";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          ← Home
        </Link>
      </nav>
    <main className={styles.main}>

      <div className={styles.content}>{children}</div>

    </main>
    </>
  );
} 