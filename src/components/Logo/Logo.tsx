import styles from './Logo.module.scss'

export default function Logo() {
  return (
    <a href="/" className={styles.link}>
      <img
        src="/img/logo.svg"
        alt="BrightCap"
        loading="lazy"
        decoding="async"
        width="628.5"
        height="176.5"
        className={styles.logo}
      />
    </a>
  )
}
