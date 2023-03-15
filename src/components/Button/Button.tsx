import { ReactNode } from 'react'
import styles from './Button.module.scss'

export default function Button(props: { children: ReactNode }) {
  return (
    <button className={styles.button} type="button">
      {props.children}
    </button>
  )
}
