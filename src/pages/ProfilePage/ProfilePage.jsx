import styles from "./ProfilePage.module.css";
import Card from "../../components/Card/Card";
// import '../styles/profile.css'

const ProfilePage = () => {

  return (
    <div className={styles.profile_container}>
        <h2 className={styles.profile}>Profile</h2>
        
        <div className={styles.wrapper}>
          <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" alt="Profile photo" className={styles.profile_photo}/>
          <div className={styles.profile_info}>
            <div className={styles.followers}>
              <div className={styles.number}>29 <p className={styles.follow}>Recipe</p></div>
              <div className={styles.number}>144 <p className={styles.follow}>Followers</p></div>
              <div className={styles.number}>100 <p className={styles.follow}>Following</p></div>
            </div>
            <h4 className={styles.full_name}>Sarthak Ranjan Hota</h4>
            <p className={styles.description}>I'm a passionate chef who loves creating delicious dishes with flair.</p>
            <button className={styles.edit_profile_button}>Manage Profile</button>
          </div>
        </div>

        <div className={styles.recipe_types}>
          <p>My recipe</p>
          <p>Saved recipe</p>
        </div>
        
        <div className={styles.posts}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default ProfilePage