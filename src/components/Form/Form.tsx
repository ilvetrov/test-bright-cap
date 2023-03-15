import Button from '../Button/Button'
import CheckboxWithLabel from '../CheckboxWithLabel/CheckboxWithLabel'
import Input from '../Input/Input'
import Tab from '../Tab/Tab'
import styles from './Form.module.scss'

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.form__secondShadow}>
        <div className={styles.form__container}>
          <div className={styles.form__tabsContainer}>
            <div className={styles.form__tabs}>
              <div className={styles.tabs}>
                <Tab active>SIGN UP</Tab>
                <Tab>SIGN IN</Tab>
              </div>
            </div>
          </div>
          <div className={styles.form__content}>
            <div className={styles.form__inputs}>
              <div className={styles.inputs}>
                <div className={styles.inputs__input}>
                  <Input label="First Name" value="Michael" />
                </div>
                <div className={styles.inputs__input}>
                  <Input label="Second Name" value="Browk" />
                </div>
                <div className={styles.inputs__input}>
                  <Input label="Phone" type="tel" />
                </div>
                <div className={styles.inputs__input}>
                  <Input label="Password" type="password" />
                </div>
              </div>
            </div>
            <div className={styles.form__checkbox}>
              <CheckboxWithLabel
                active
                text="I accept the privacy policy, terms & conditions"
              />
            </div>
            <div className={styles.form__button}>
              <Button>START NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
