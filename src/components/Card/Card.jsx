import styles from "./Card.module.css";
import like_icon from "../../assets/like_white.svg";
import save_icon from "../../assets/save_white.svg";
import dish_img from "../../assets/details-hero.jpeg";

const Card = ({ title, author, likes, saves }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${dish_img})` }}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>Egg Omlet {title}</h2>
          <p className={styles.author}>by Ainsley Harriott {author}</p>
          <div className={styles.icons}>
            <span className={styles.icon}><img src={like_icon} alt="like icon" className={styles.icon_img}/>118{likes}</span>
            <span className={styles.icon}><img src={save_icon} alt="save icon" className={styles.icon_img}/>118{saves}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
