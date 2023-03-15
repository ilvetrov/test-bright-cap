import clsx from 'clsx'
import { useId, useState } from 'react'
import styles from './Checkbox.module.scss'

export default function Checkbox(props: { active?: boolean; id?: string }) {
  const innerId = useId()
  const id = props.id ?? innerId

  const [active, setActive] = useState(props.active ?? false)

  return (
    <div className={styles.checkboxBlock}>
      <label
        htmlFor={id}
        className={clsx(styles.label, active && styles.label_active)}
      >
        <div className={styles.label__arrow}>
          <img
            src="./img/checked-arrow.svg"
            alt="✓"
            loading="lazy"
            decoding="async"
            className={styles.arrow}
            width="15"
            height="12"
          />
        </div>
      </label>
      <input
        id={id}
        className={styles.checkboxBlock__checkbox}
        type="checkbox"
        checked={active}
        onChange={(event) => setActive(event.target.checked)}
      />
    </div>
  )
}
