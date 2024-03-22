import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import styles from './CreateRecipe.module.css';
import photo from "../../assets/photo.svg";


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
            // Add logic here to handle form submission, such as making API calls
        },
      });
    
    return (
        <form className={styles.form_container} onSubmit={formik.handleSubmit}>
            <h2 className={styles.h2}>Create recipe</h2>

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
                    />
                {formik.touched.photo && formik.errors.photo ? (
                <div className={styles.error}>{formik.errors.photo}</div>
              ) : null}
                </div>
            </label>

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

            <label htmlFor="ingredients" className={styles.label}>
                Add an ingredient
                <input 
                    type="text" 
                    name='ingredient'
                    placeholder='Ingredient name'
                />
                <input 
                    type="number" 
                    name='amount'
                    placeholder='0'
                />
                <select
                    // className={styles.custom_input}
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
                        ""
                    </option>
                </select>
            </label>

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