import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <div className={styles.section0}>
        <div className={styles.title}>
          <p>SENAI Lab</p>
        </div>
      </div>

      <div className={styles.imagecontainer}>
        <img className={styles.img} src=""></img>
      </div>
      <div className={styles.section1}>
        <div className={styles.title2}>
         <p>Serviços</p>
         </div>
    
      </div>

  
      <footer className={styles.footer}></footer>
    </div>
  );
}
