import { useState } from "react";
import styles from "./SearchPage.module.css";
import plus_icon from "../../assets/plus_icon.svg";
import search_icon from "../../assets/search.svg";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import CreateRecipe from "../../components/CreateRecipe/CreateRecipe";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("Recipes");
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleTabClick = (tabName) =>{
    setActiveTab(tabName)
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.h3}>What to eat today?</h3>
        <div className={styles.tab_container}>
          <p 
            className={`${activeTab === "Chefs" ? styles.tab_item_active : styles.tab_item}`}
            onClick={() => handleTabClick("Chefs")}
          >
            Chefs
          </p>
          <p 
            className={`${activeTab === "Recipes" ? styles.tab_item_active : styles.tab_item}`}
            onClick={() => handleTabClick("Recipes")}
          >
            Recipes
          </p>
        </div>
        <form className={styles.form}>
          <input 
            type="search" 
            placeholder={`Search ${activeTab}`} 
            className={styles.input}
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          {/* <img src={search_icon} alt="search icon" /> */}
        </form>
      </div>
     
      
      {/* <div>Search results</div> */}
      <button onClick={onOpenModal} className={styles.add_recipe_button}><img src={plus_icon} alt="add icon" />Add your recipe</button>
      <ModalComponent open={open} onClose={onCloseModal}>
        <CreateRecipe/>
      </ModalComponent>
    </div>
  )
}

export default SearchPage