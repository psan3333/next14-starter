import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>
        Sunt excepteur qui aliqua occaecat et voluptate laboris tempor. Voluptate anim voluptate tempor nulla cillum. Veniam aute deserunt et proident aute irure qui consequat. Cupidatat dolor duis mollit elit occaecat eiusmod anim proident duis irure do. Incididunt adipisicing qui voluptate reprehenderit nulla est cillum ea irure ut anim exercitation nostrud. Occaecat officia voluptate fugiat sint. Proident cupidatat esse adipisicing adipisicing eiusmod culpa veniam laborum exercitation ex exercitation.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;