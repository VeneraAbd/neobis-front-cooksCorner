import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  
  
  return (
    <div className={styles.layout_container}>
        <Sidebar/>     
        <main className={styles.main}>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout