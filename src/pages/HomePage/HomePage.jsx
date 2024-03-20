import { useState } from "react";
import styles from "./HomePage.module.css";
import Card from "../../components/Card/Card";

const HomePage = () => {

  const tabs = ['Breakfast', 'Lunch', 'Dinner'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const [filteredData, setFilteredData] = useState(mockData);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Filtering the data based on the selected category
//     const filtered = mockData.filter(item => item.category === tab);
//     setFilteredData(filtered);
  }

    return(
      <div className={styles.container}>
        <p className={styles.p}>Hi, Sarthak. UI Designer & Cook</p>
        <h3 className={styles.h3}>Category</h3>
        <div className={styles.tabsContainer}>
            <ul className={styles.tab_list}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`${styles.tab_item} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                        {activeTab === tab && <div className={styles.activeDot}></div>} 
                    </li>
                ))}
            </ul>
            <div className={styles.tab_content}>
               <Card/> 
            </div>
        </div>
      </div>
    )
}
  
  export default HomePage