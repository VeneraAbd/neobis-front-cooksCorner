import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import at from "../../assets/at.svg";
import user_icon from "../../assets/user.svg"
import show from '../../assets/show.svg';
import hide from '../../assets/hide.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';
import { signupValidationSchema } from '../../schemas/index';
import styles from './RegistrationPage.module.css';
import Spinner from "../../components/Spinner/Spinner";
const RegistrationPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
      toast.error(message)
      console.log(message)
    }
    if(isSuccess || user){
      navigate('/confirmation')
    }

    dispatch(reset())
  }, [ user, isError, isSuccess, message, navigate, dispatch])

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onFormSubmit = ( { email, name, password, confirmPassword } ) => {
    dispatch(register({email, name, password, confirmPassword })).then(() => {
      toast.success('Вы успешно зарегистрированы');
    });
  };
  
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: onFormSubmit,
  });

  
  
  if(isLoading){
    return <Spinner/>
  }

  return (
    <div className={styles.container}>
      <section className={styles.login_header}>
        <p className={styles.heading}>Sign up for delicious</p>
        <p className={styles.heading}><span className={styles.company_title}>Discoveries</span></p>
      </section>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form_wrapper}>
        <div className={styles.input_wrapper}>
          {/* name */}
          <div>
            <label htmlFor="name" className={styles.label}>Name</label>
              <div className={styles.password_input}>
                <input
                  value={values.name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button className={styles.showHide_btn} type="button"><img src={user_icon} alt="user icon" /></button>
              </div>
              {errors.name && touched.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          {/* email */}
          <div>
            <label htmlFor="email" className={styles.label}>Gmail</label>
            <div className={styles.password_input}>
                <input 
                  value={values.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Gmail"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <button className={styles.showHide_btn} type="button"><img src={at} alt="at sign" /></button>
            </div>
            {errors.email && touched.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          {/* password */}
          <div>
            <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.password_input}>
                <input
                  value={values.password}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                
                />
                <button className={styles.showHide_btn} onClick={toggleShowPassword} type="button">
                  <img src={showPassword ? hide : show} alt="show or hide password" />
                </button>
              </div>
              {errors.password && touched.password && (<p className={styles.error}>{errors.password}</p>)}
          </div>
          {/* confirm password */}
          <div>
            <label htmlFor="confirmPassword" className={styles.label}>Re-password</label>
            <div className={styles.password_input}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Re-Enter your Password"
                className={`${styles.input} ${errors.confirmPassword && touched.confirmPassword ? styles.input_error : ''}`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button className={styles.showHide_btn} onClick={toggleShowConfirmPassword} type="button">
                <img src={showConfirmPassword ? hide : show} alt="show or hide password" />
              </button>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (<p className={styles.error}>{errors.confirmPassword}</p>)}
          </div>
        </div>
        <button disabled={isSubmitting} type="submit" className={styles.login_button}>Sign Up</button>
        <p className={styles.p}>Already have an account? <Link to="/login" className={styles.registration_link}>Sign In Now</Link></p>
      </form>
    </div>
  );
};

export default RegistrationPage;