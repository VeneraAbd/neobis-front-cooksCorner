import styles from "./LoginPage.module.css";
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { loginValidationSchema } from "../../schemas/index";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import show from "../../assets/show.svg";
import hide from "../../assets/hide.svg";
import at from "../../assets/at.svg";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { login, reset } from "../../features/auth/authSlice";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
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
      navigate('/')
    }

    dispatch(reset())
  }, [ user, isError, isSuccess, message, navigate, dispatch])

  const toggleShowPassword = () =>{
    setShowPassword(!showPassword)
  }

  const loginFormSubmit = async( values ) =>{
    const { email, password } = values;
    console.log("form is submitted")

    dispatch(login({ email, password }))
    toast("Succesfully logged in")
  }
  
  const { values, errors, touched, handleBlur, handleChange, isValid, handleSubmit} = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: loginFormSubmit,
  });

  if(isLoading){
    return <Spinner/>

  }
  return (
    <div className={styles.container}>
      <section className={styles.login_header}>
        <p className={styles.heading}>Welcome Back</p>
        <p className={styles.heading}>To <span className={styles.company_title}>CooksCorner</span></p>
      </section>
      <form onSubmit={handleSubmit} className={styles.form_wrapper}>
        <div className={styles.input_wrapper}>
          <div>
            <label htmlFor="email" className={styles.label}>Gmail</label>
            <div className={styles.password_input}>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={styles.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <button className={styles.showHide_btn} type="button"><img src={at} alt="at sign" /></button>
          </div>
            {touched.email && errors.email ? (
                  <div className={styles.error}>{errors.email}</div>
                ) : null}
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.password_input}>
                <input 
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className={styles.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <button className={styles.showHide_btn} onClick={toggleShowPassword} type="button"><img src={showPassword ? hide : show} alt="show or hide password" /></button>
              </div>
            {touched.password && errors.password ? (
                  <div className={styles.error}>{errors.password}</div>
                ) : null}
          </div>     
        </div>
      <button type="submit" className={styles.login_button}>Sign in</button>
      <p className={styles.p}>I don't have an account. <Link to="/register" className={styles.registration_link}>Sign Up Now</Link></p>
      </form>
    </div>
    
  )
}

export default LoginPage;
