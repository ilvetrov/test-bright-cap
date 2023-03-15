import { ReactNode, useId } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import styles from './CheckboxWithLabel.module.scss'

export default function CheckboxWithLabel(props: {
  active?: boolean
  text: ReactNode
}) {
  const id = useId()

  return (
    <div className={styles.block}>
      <Checkbox active={props.active} id={id} />
      <label htmlFor={id} className={styles.block__label}>
        {props.text}
      </label>
    </div>
  )
}
