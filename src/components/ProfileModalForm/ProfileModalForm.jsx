import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import styles from './ProfileModalForm.module.css';
import photo from '../../assets/photo.svg';

const ProfileModalForm = () => {
  const formik = useFormik({
    initialValues: {
      profileName: '',
      biography: '',
      photo: '',
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
      <h2 className={styles.h2}>Manage profile</h2>
      <label htmlFor="profileName" className={styles.label}>
        Change your name
        <input
          type="text"
          id="profileName"
          name="profileName"
          placeholder="Pancakes"
          className={styles.name_input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.profileName}
        />
        {/* {formik.touched.profileName && formik.errors.profileName ? (
          <div className={styles.error}>{formik.errors.profileName}</div>
        ) : null} */}
      </label>

      <label htmlFor="biography" className={styles.label}>
        Change your bio
        <textarea
          id="biography"
          name="biography"
          rows="2"
          cols="33"
          className={styles.bio_input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.biography}
        />
        {/* {formik.touched.biography && formik.errors.biography ? (
          <div className={styles.error}>{formik.errors.biography}</div>
        ) : null} */}
      </label>

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
      <button type="submit" className={styles.save_button}>
        Save changes
      </button>
    </form>
  );
};

export default ProfileModalForm;
