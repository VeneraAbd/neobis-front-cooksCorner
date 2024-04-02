import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from "./Sidebar.module.css"; 
import logo from "../../assets/logo.svg";
import logout_icon from "../../assets/logout-icon.svg";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";
import whitehome from "../../assets/whitehome.svg";
import whiteprofile from "../../assets/whiteprofile.svg";
import whitesearch from "../../assets/whitesearch.svg";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { logout, reset } from "../../features/auth/authSlice";


const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth)
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const setActive = ({isActive}) => {
    return isActive ? styles.active_link : styles.link
  }

  const onLogout =() =>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  return (
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
              <button onClick={onOpenModal} type="submit" className={`${styles.link} ${styles.logout_button}`}><img src={logout_icon} alt="logout icon" /></button>
              <ModalComponent open={open} onClose={onCloseModal}>
                <div className={styles.modal_container}>
                    <h2 className={styles.h2}>Are you sure you wanna leave?</h2>
                    <div className={styles.button_wrapper}>
                      <button className={styles.modal_button} onClick={onLogout}>Yes</button>
                      <button className={styles.modal_button}>No</button>
                    </div>
                </div>
              </ModalComponent>
            </div> 
        </header>
  )
}

export default Sidebar