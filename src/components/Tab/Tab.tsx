import clsx from 'clsx'
import { ReactNode } from 'react'
import styles from './Tab.module.scss'

export default function Tab(props: { active?: boolean; children: ReactNode }) {
  return (
    <div className={styles.tab}>
      <div
        className={clsx(
          styles.tabContent,
          props.active && styles.tabContent_active,
          styles.tab__content,
        )}
      >
        {props.children}
      </div>
      <div
        className={clsx(
          styles.tabLine,
          props.active && styles.tabLine_active,
          styles.tab__line,
        )}
      ></div>
    </div>
  )
}
