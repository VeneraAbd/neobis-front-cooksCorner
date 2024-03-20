import styles from "./RecipeDetails.module.css";
import arrow_back from "../../assets/arrow_back.svg";
import { Link } from "react-router-dom";
import details_hero from "../../assets/details-hero.jpeg"
import time from "../../assets/time.svg";
import like_icon from "../../assets/like.svg";
import save_icon from "../../assets/save.svg";

const RecipeDetails = () => {
  return (
    <div className={styles.container}>
      {/* Background image of the recipe details page */}
      <div className={styles.hero}>
        <img src={details_hero} alt="" className={styles.img}/>
        <Link to="/" className={styles.link}>
          <button className={styles.button}>
            <img src={arrow_back} alt="left arrow" />
          </button>
        </Link>
      </div>

      <div className={styles.bottom_container}>
        {/* Name of the dish and its author */}
        <div className={styles.about_recipe}>
          <h1 className={styles.recipe_title}>Ainsley's Jerk Chicken</h1>
          <p className={styles.author}>by Ainsley Harriott</p>
        </div>
        {/* Cook time and level */}
        <div className={styles.cooking_details}>
          <p className={styles.cook_time}><img src={time} alt="time icon" />20-30 min</p>
          <p className={styles.cook_level}>Easy</p>
        </div>
        
        {/* likes */}
        <div className={styles.likes_wrapper}>
            <button className={styles.likes}>
              <img src={like_icon} alt="like icon" />
              <p className={styles.like_num}>12 likes</p>
            </button>
            <button className={styles.likes}>
              <img src={save_icon} alt="save icon" />
            </button>
        </div>
        {/* Description */}
        <div className={styles.description}>
          <h3 className={styles.description_title}>Description</h3>
          <p className={styles.text}>You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then work that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...</p>
        </div>

        {/* Ingredients */}
        <div className={styles.ingredients_container}>
          <h3 className={styles.description_title}>Ingredients</h3>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <p className={styles.ingredient}>Chicken</p><p>1 kg</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.ingredient}>Olive oil</p><p>3/4 spoon</p>
            </li>
            <li className={styles.list_item}>
              <p className={styles.ingredient}>Garlic powder</p><p>1/2 spoon</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}


export default RecipeDetails