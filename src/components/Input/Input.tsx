import clsx from 'clsx'
import { InputHTMLAttributes, useId, useState } from 'react'
import styles from './Input.module.scss'

export default function Input(props: {
  label: string
  value?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}) {
  const id = useId()
  const [value, setValue] = useState(props.value ?? '')

  return (
    <div className={styles.inputBlock}>
      <input
        id={id}
        className={clsx(styles.input, styles.inputBlock__input)}
        type={props.type || 'text'}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <label
        htmlFor={id}
        className={clsx(styles.label, styles.inputBlock__label)}
      >
        {props.label}
      </label>
    </div>
  )
}
