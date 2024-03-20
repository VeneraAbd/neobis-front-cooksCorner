import { useState } from 'react';
import { useFormik } from 'formik';
import at from "../../assets/at.svg";
import user from "../../assets/user.svg"
import show from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { register } from '../../store/reducers/auth';

import { signupValidationSchema } from '../../schemas/index';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onFormSubmit = ({ email, username, password, password_confirm }) => {
    // dispatch(register({ email, username, password, password_confirm })).then(() => {
    //   toast.success('Вы успешно зарегистрированы');
    //   navigate('/confirmation');
    // });
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: onFormSubmit,
  });

  return (
    <div className={styles.container}>
      <section className={styles.login_header}>
        <p className={styles.heading}>Sign up for delicious</p>
        <p className={styles.heading}><span className={styles.company_title}>Discoveries</span></p>
      </section>
      <form autoComplete="off" className={styles.form_wrapper}>
        <div className={styles.input_wrapper}>
          {/* name */}
          <div>
            <label htmlFor="username" className={styles.label}>Name</label>
              <div className={styles.password_input}>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={values.username}
                  placeholder="Enter your name"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button className={styles.showHide_btn} type="button"><img src={user} alt="user icon" /></button>
              </div>
              {errors.username && touched.username && <p className={styles.error}>{errors.username}</p>}
          </div>
          {/* email */}
          <div>
            <label htmlFor="email" className={styles.label}>Gmail</label>
            <div className={styles.password_input}>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Gmail"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <button className={styles.showHide_btn} type="button"><img src={at} alt="at sign" /></button>
            </div>
            {touched.email && errors.email ? (<div className={styles.error}>{errors.email}</div>
            ) : null}
          </div>
          {/* password */}
          <div>
            <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.password_input}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={styles.input}
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                
                />
                <button className={styles.showHide_btn} onClick={toggleShowPassword} type="button">
                  <img src={showPassword ? hide : show} alt="show or hide password" />
                </button>
              </div>
              {errors.password && touched.password && (
              <p className={styles.error}>{errors.password}</p>
              )}
          </div>
          {/* confirm password */}
          <div>
              <label htmlFor="password_confirm" className={styles.label}>Re-password</label>
              <div className={styles.password_input}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="password_confirm"
                  name="password_confirm"
                  value={values.password_confirm}
                  placeholder="Re-Enter your Password"
                  className={`${styles.input} ${
                    errors.password_confirm && touched.password_confirm ? styles.input_error : ''
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                
                />
                <button className={styles.showHide_btn} onClick={toggleShowConfirmPassword} type="button">
                  <img src={showConfirmPassword ? hide : show} alt="show or hide password" />
                </button>
              </div>
              {errors.password_confirm && touched.password_confirm && (
              <p className={styles.error}>{errors.password_confirm}</p>
              )}
          </div>
        </div>
        <button type="submit" className={styles.login_button}>Sign Up</button>
        <p className={styles.p}>Already have an account? <Link to="/login" className={styles.registration_link}>Sign In Now</Link></p>

      </form>
    </div>
  );
};

export default RegistrationPage;


// import { useForm } from 'react-hook-form'

// const RegistrationPage = () => {
  // const { register, handleSubmit } = useForm()

  // const submitForm = (data) => {
  //   if (data.password !== data.confirmPassword) {
  //     alert('Password mismatch')
  //     return
  //   }
  //   // transform email string to lowercase to avoid case sensitivity issues during login
  //   data.email = data.email.toLowerCase()
  //   console.log(data)
  // }

  // return (
    
  //   <div>Registration</div>
  //   // <form onSubmit={handleSubmit(submitForm)}>
    //   <div className='form-group'>
    //     <label htmlFor='firstName'>First Name</label>
    //     <input
    //       type='text'
    //       className='form-input'
    //       {...register('firstName')}
    //       required
    //     />
    //   </div>
    //   <div className='form-group'>
    //     <label htmlFor='email'>Email</label>
    //     <input
    //       type='email'
    //       className='form-input'
    //       {...register('email')}
    //       required
    //     />
    //   </div>
    //   <div className='form-group'>
    //     <label htmlFor='password'>Password</label>
    //     <input
    //       type='password'
    //       className='form-input'
    //       {...register('password')}
    //       required
    //     />
    //   </div>
    //   <div className='form-group'>
    //     <label htmlFor='email'>Confirm Password</label>
    //     <input
    //       type='password'
    //       className='form-input'
    //       {...register('confirmPassword')}
    //       required
    //     />
    //   </div>
    //   <button type='submit' className='button'>
    //     Login
    //   </button>
    // </form>
//   )
// }

// export default RegistrationPage