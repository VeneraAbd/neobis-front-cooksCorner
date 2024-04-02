// import { useFormik } from 'formik';
// import * as Yup from 'yup'; 
// import styles from './CreateRecipe.module.css';
// import photo from "../../assets/photo.svg";
// import plus from "../../assets/plus.svg";

// const CreateRecipe = () => {
//     const formik = useFormik({
//         initialValues: {
//             recipePhoto: '',
//             recipeName: '',
//             description: '',
//             ingredients: {
//                 ingredientName: "",
//                 ingredientAmount: ""
//             },
//             difficulty:"",
//             category: "",
//             preparationTime:"",
//         },
//         validationSchema: Yup.object().shape({
//             recipePhoto: Yup.string(),
//             recipeName: Yup.string().required('Recipe name is required'),
//             description: Yup.string().required('Description is required'),
//             ingredients: Yup.array().of(
//                 Yup.object().shape({
//                     ingredientName: Yup.string().required('Ingredient name is required'),
//                     ingredientAmount: Yup.number().required('Ingredient amount is required')
//                 })
//             ),
//             difficulty: Yup.string().required('Difficulty is required'),
//             category: Yup.string().required('Category is required'),
//             preparationTime: Yup.number().required('Preparation time is required')
//         }),
//         onSubmit: (values) => {
//             console.log('Form values:', values);
//         },
//     });
    
//     return (
//         <form className={styles.form_container} onSubmit={formik.handleSubmit}>
//             <h2 className={styles.h2}>Create recipe</h2>
//             {/* recipe photo */}
//             <label htmlFor="recipePhoto" className={styles.label}>Add a recipe photo
//                 <div className={styles.wrapper}>
//                     <img src={photo} alt="photo icon" />
//                     <input
//                         type="file"
//                         id="recipePhoto"
//                         name="recipePhoto"
//                         placeholder='Upload a new photo'
//                         className={styles.file_input}
//                         onChange={(event) => formik.setFieldValue('recipePhoto', event.target.files[0])}
//                     />
//                     {formik.touched.recipePhoto && formik.errors.recipePhoto ? (
//                         <div className={styles.error}>{formik.errors.recipePhoto}</div>
//                     ) : null}
//                 </div>
//             </label>
//             {/* recipe name */}
//             <label htmlFor="recipeName" className={styles.label}>
//                 Name your recipe
//                 <input
//                     type="text"
//                     id="recipeName"
//                     name="recipeName"
//                     placeholder="Pancakes"
//                     className={styles.name_input}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.recipeName}
//                 />
//                 {formik.touched.recipeName && formik.errors.recipeName ? (
//                     <div className={styles.error}>{formik.errors.recipeName}</div>
//                 ) : null}
//             </label>
//             {/* recipe description */}
//             <label htmlFor="description" className={styles.label}>
//                 Add a description
//                 <input
//                     type="text"
//                     id="description"
//                     name="description"
//                     placeholder="Description"
//                     className={styles.custom_input}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.description}
//                 />
//                 {formik.touched.description && formik.errors.description ? (
//                     <div className={styles.error}>{formik.errors.description}</div>
//                 ) : null}
//             </label>
//             {/* ingredients */}
//             <label htmlFor="ingredients" className={styles.label}>
//                 Add an ingredient
//                 <div className={styles.ingredients_wrapper}>
//                     <input 
//                         className={styles.ingredient_input}
//                         type="text" 
//                         name='ingredients[0].ingredientName'
//                         placeholder='Ingredient name'
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.ingredients[0].ingredientName}
//                     />
//                     <div className={styles.amount}>
//                         <input 
//                             className={styles.num_input}
//                             type="number" 
//                             min={0}
//                             name='ingredients[0].ingredientAmount'
//                             placeholder='0'
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.ingredients[0].ingredientAmount}
//                         />
//                     </div>
//                     <button type="button" className={styles.add_button}><img src={plus} alt="plus icon button" /></button>
//                 </div>
//                 {formik.touched.ingredients && formik.errors.ingredients ? (
//                     <div className={styles.error}>{formik.errors.ingredients}</div>
//                 ) : null}
//             </label>
//             {/* difficulty */}
//             <label htmlFor="difficulty" className={styles.label}>
//                 Difficulty
//                 <div className={styles.buttonGroup}>
//                     <button
//                         type="button"
//                         className={`${styles.button} ${formik.values.difficulty === 'easy' ? styles.active : ""}`}
//                         onClick={() => formik.setFieldValue('difficulty', 'easy')}
//                     >
//                         Easy
//                     </button>
//                     <button
//                         type="button"
//                         className={`${styles.button} ${formik.values.difficulty === 'medium' ? styles.active : ""}`}
//                         onClick={() => formik.setFieldValue('difficulty', 'medium')}
//                     >
//                         Medium
//                     </button>
//                     <button
//                         type="button"
//                         className={`${styles.button} ${formik.values.difficulty === 'hard' ? styles.active : ""}`}
//                         onClick={() => formik.setFieldValue('difficulty', 'hard')}
//                     >
//                         Hard
//                     </button>
//                 </div>
//                 {formik.touched.difficulty && formik.errors.difficulty ? (
//                     <div className={styles.error}>{formik.errors.difficulty}</div>
//                 ) : null}
//             </label>
//             {/* category */}
//             <label htmlFor="category" className={styles.label}>
//                 Category of meal
//                 <select
//                     className={styles.custom_input}
//                     name="category"
//                     value={formik.values.category}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                 >
//                     <option value="breakfast" label="breakfast">
//                         Breakfast
//                     </option>
//                     <option value="lunch" label="lunch">
//                         Lunch
//                     </option>
//                     <option value="dinner" label="dinner">
//                         Dinner
//                     </option>
//                 </select>
//                 {formik.touched.category && formik.errors.category ? (
//                     <div className={styles.error}>{formik.errors.category}</div>
//                 ) : null}
//             </label>
//             {/* cooking time */}
//             <label htmlFor="preparationTime" className={styles.label}>
//                 How much time does it need?(minutes)
//                 <input
//                     type="number"
//                     id="preparationTime"
//                     name="preparationTime"
//                     placeholder="Pancakes"
//                     className={styles.custom_input}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.preparationTime}
//                 />
//                 {formik.touched.preparationTime && formik.errors.preparationTime ? (
//                     <div className={styles.error}>{formik.errors.preparationTime}</div>
//                 ) : null}
//             </label>
       
//           <button type="submit" className={styles.save_button}>
//             Create a recipe
//           </button>
//         </form>
//     );
// }

// export default CreateRecipe;

import FileUpload from "../FileUpload";
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
import styles from './CreateRecipe.module.css';
import photo from "../../assets/photo.svg";
import plus from "../../assets/plus.svg";

const CreateRecipe = () => {
    const formik = useFormik({
        initialValues: {
            recipePhoto: '',
            recipeName: '',
            description: '',
            ingredients: {
                ingredientName: "",
                ingredientAmount: ""
            },
            difficulty:"",
            category: "",
            preparationTime:"",

        },
        validationSchema: Yup.object().shape({
            profileName: Yup.string().required('Profile name is required'),
            biography: Yup.string().required('Biography is required'),
        }),
        onSubmit: (values) => {
            console.log('Form values:', values);
            
        },
      });
    
    return (
        <form className={styles.form_container} onSubmit={formik.handleSubmit}>
            <h2 className={styles.h2}>Create recipe</h2>
            {/* recipe photo */}
         
            <label htmlFor="photo" className={styles.label}>Add a recipe photo
                <div className={styles.wrapper}>
                    <img src={photo} alt="photo icon" />
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        placeholder='Upload a new photo'
                        className={styles.file_input}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.photo}
                        accept='image/*.png, .jpg, .gif, .web,'
                    />
                {formik.touched.photo && formik.errors.photo ? (
                <div className={styles.error}>{formik.errors.photo}</div>
              ) : null}
                </div>
            </label>
            {/* recipe name */}
            <label htmlFor="recipeName" className={styles.label}>
                Name your recipe
                <input
                type="text"
                id="recipeName"
                name="recipeName"
                placeholder="Pancakes"
                className={styles.name_input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.recipeName}
                />
            </label>
            {/* recipe description */}
            <label htmlFor="description" className={styles.label}>
                Add a description
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className={styles.custom_input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />

            </label>
            {/* ingredients */}
            <label htmlFor="ingredients" className={styles.label}>
                Add an ingredient
                <div className={styles.ingredients_wrapper}>
                    <input 
                        className={styles.ingredient_input}
                        type="text" 
                        name='ingredient'
                        placeholder='Ingredient name'
                    />
                    <div className={styles.amount}>
                        <input 
                            className={styles.num_input}
                            type="number" 
                            min={0}
                            name='amount'
                            placeholder='0'
                        />
                        <select
                            className={styles.unit}
                            name="unit"
                            value={formik.values.unit}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="kg" label="kg">
                                kg
                            </option>
                            <option value="g" label="g">
                                g
                            </option>
                            <option value="spoon" label="spoon">
                                spoon
                            </option>
                            <option value="cup" label="cup">
                                cup
                            </option>
                            <option value="" label="">
                                
                            </option>
                        </select>
                    </div>
                    <button className={styles.add_button}><img src={plus} alt="plus icon button" /></button>
                </div>
            </label>
            {/* difficulty */}
            <label htmlFor="difficulty" className={styles.label}>
                Difficulty
                <div className={styles.buttonGroup}>
                    <button
                        type="button"
                        className={`${styles.button} ${formik.values.difficulty === 'easy' ? styles.active : ""}`}
                        onClick={() => formik.setFieldValue('difficulty', 'easy')}
                    >
                        Easy
                    </button>
                    <button
                        type="button"
                        className={`${styles.button} ${formik.values.difficulty === 'medium' ? styles.active : ""}`}
                        onClick={() => formik.setFieldValue('difficulty', 'medium')}
                    >
                        Medium
                    </button>
                    <button
                        type="button"
                        className={`${styles.button} ${formik.values.difficulty === 'hard' ? styles.active : ""}`}
                        onClick={() => formik.setFieldValue('difficulty', 'hard')}
                    >
                        Hard
                    </button>
                </div>
            </label>
            {/* category */}
            <label htmlFor="category" className={styles.label}>
                Category of meal
                <select
                    className={styles.custom_input}
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="breakfast" label="breakfast">
                        Breakfast
                    </option>
                    <option value="lunch" label="lunch">
                        Lunch
                    </option>
                    <option value="dinner" label="dinner">
                        Dinner
                    </option>
                </select>
            </label>
            {/* cooking time */}
            <label htmlFor="preparationTime" className={styles.label}>
                How much time does it need?(minutes)
                <input
                    type="preparationTime"
                    id="preparationTime"
                    name="preparationTime"
                    placeholder="Pancakes"
                    className={styles.custom_input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.preparationTime}
                />
            </label>
       
          <button type="submit" className={styles.save_button}>
            Create a recipe
          </button>
        </form>
      );
}
export default CreateRecipe
