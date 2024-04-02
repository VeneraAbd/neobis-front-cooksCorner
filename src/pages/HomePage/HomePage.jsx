
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./HomePage.module.css";
import Card from "../../components/Card/Card";

// Define or import your mock data here
const mockData = [
  // Your mock data items here
];

const HomePage = () => {
  const tabs = ['Breakfast', 'Lunch', 'Dinner'];
  const [activeTab, setActiveTab] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    // Parse query parameter 'category' from the location
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');

    // Set active tab based on query parameter
    setActiveTab(categoryParam || tabs[0]);

    // Filter the data based on the query parameter or default to the first tab
    const filtered = categoryParam ? mockData.filter(item => item.category === categoryParam) : mockData;
    setFilteredData(filtered);
  }, [location.search]);

  const handleTabClick = (tab) => {
    // Update the URL query parameter when a tab is clicked
    const params = new URLSearchParams(location.search);
    params.set('category', tab);
    // Replace the current location with the new query parameter
    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);

    setActiveTab(tab);
    // Filter the data based on the selected category
    const filtered = mockData.filter(item => item.category === tab);
    setFilteredData(filtered);
  }

  return (
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
          {/* Render cards based on filteredData */}
          {filteredData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

















// import { useState } from "react";
// import styles from "./HomePage.module.css";
// import Card from "../../components/Card/Card";

// const HomePage = () => {

//   const tabs = ['Breakfast', 'Lunch', 'Dinner'];
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [filteredData, setFilteredData] = useState(mockData);
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     // Filtering the data based on the selected category
//     const filtered = mockData.filter(item => item.category === tab);
//     setFilteredData(filtered);
//   }

//     return(
//       <div className={styles.container}>
//         <p className={styles.p}>Hi, Sarthak. UI Designer & Cook</p>
//         <h3 className={styles.h3}>Category</h3>
//         <div className={styles.tabsContainer}>
//             <ul className={styles.tab_list}>
//                 {tabs.map((tab, index) => (
//                     <li
//                         key={index}
//                         className={`${styles.tab_item} ${activeTab === tab ? styles.active : ''}`}
//                         onClick={() => handleTabClick(tab)}
//                     >
//                         {tab}
//                         {activeTab === tab && <div className={styles.activeDot}></div>} 
//                     </li>
//                 ))}
//             </ul>
//             <div className={styles.tab_content}>
//                <Card/> 
//             </div>
//         </div>
//       </div>
//     )
// }
  
//   export default HomePage