import Form from '../Form/Form'
import Logo from '../Logo/Logo'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__container}>
        <div className={styles.homePage__sides}>
          <div className={styles.homePage__leftSide}>
            <div className={styles.homePage__header}>
              <header className={styles.header}>
                <div className={styles.header__logo}>
                  <Logo />
                </div>
              </header>
            </div>
            <div className={styles.homePage__titleBlock}>
              <div className={styles.titleBlock}>
                <div className={styles.titleBlock__subtitle}>
                  <div className={styles.subtitle}>Hello</div>
                </div>
                <div className={styles.titleBlock__title}>
                  <h1 className={styles.title}>
                    Let’s Connect
                    <span className={styles.title__dot}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#EB445A" />
                      </svg>
                    </span>
                  </h1>
                </div>
                <div className={styles.titleBlock__description}>
                  <div className={styles.description}>
                    <p>Enter your information and proceed.</p>
                    <p>Next steps are interactive and also amatory before</p>
                    <p>offering the call or chat options.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homePage__rightSide}>
            <main className={styles.rightSide}>
              <div className={styles.rightSide__form}>
                <Form />
              </div>
              <div className={styles.rightSide__copyright}>
                2021 Telerion | Private & Confidential
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
