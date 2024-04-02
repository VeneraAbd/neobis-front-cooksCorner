import styles from "./ConfirmationPage.module.css";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Confirmation = () => {
  const [open, setOpen] = useState(false);
  const email = useSelector((state) => state.auth.email);
  
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.text_container}>
            <h3 className={styles.heading3}>Выслали письмо со ссылкой для завершения регистрации на {email}</h3>
            <p className={styles.text}>Если письмо не пришло, не спеши ждать совиную почту - лучше <span className={styles.span}>проверь ящик “Спам”</span></p>
            <h3>(´｡• ω •｡`)</h3>
            <button onClick={onOpenModal} className={styles.letter_resendBtn}>Письмо не пришло</button>
            <ModalComponent open={open} onClose={onCloseModal}>
              <div className={styles.modal_container}>
                <h3 className={styles.modalh3}>Мы выслали еще одно письмо на указанную тобой почту {email}</h3>
                <p className={styles.modalp}>Не забудь проверить ящик “Спам”!11!!!!</p>
                <button className={styles.login_button} onClick={onCloseModal}>Понятно!!1!</button>
              </div>
            </ModalComponent>
            <Link to="/login"><p>Go to login page</p></Link>
          </div>
        </div>
    </section>
  )
}

export default Confirmation