import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to the Rick & Morty API</h1>
        <p className={styles.description}>Filter and find a character</p>
      </div>
      <img className={styles.heroImg} src={getImageUrl("Nav/rick-drunk.png")} alt="Hero Img" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;