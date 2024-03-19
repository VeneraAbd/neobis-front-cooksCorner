import { NavLink, Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import logo from "../../assets/logo.svg";
import logout_icon from "../../assets/logout-icon.svg";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";
import whitehome from "../../assets/whitehome.svg";
import whiteprofile from "../../assets/whiteprofile.svg";
import whitesearch from "../../assets/whitesearch.svg";


const Layout = () => {
  
  const setActive = ({isActive}) => {
    return isActive ? styles.active_link : styles.link;
  }
  return (
    <div className={styles.layout_container}>
      {/* sidebar */}
        <header className={styles.sidebar}>
            <div className={styles.logo_wrapper}>
              <Link to="/"><img className={styles.img} src={logo} alt="logo" /></Link>
            </div>
            <div className={styles.sidebar_buttons}>
              <div className={styles.pages}>
                <NavLink to="/" className={setActive}><img src={home} alt="home page icon" /></NavLink>
                <NavLink to="search" className={setActive}><img src={search} alt="search page icon" /></NavLink>
                <NavLink to="profile" className={setActive}><img src={profile} alt="profile page icon" /></NavLink>
              </div>
              <button type="submit" className={`${styles.link} ${styles.logout_button}`}><img src={logout_icon} alt="logout icon" /></button>
            </div> 
        </header>
        <main className={styles.main}>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout