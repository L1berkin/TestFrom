import { useContext, useState } from 'react'
import classes from './Checkbox.module.css'
import checkMarker from '../../assets/icons/check.png'
import { FormContext } from '../Form/Form'

function Checkbox({ required }) {
  const id = '' + Math.random() + Date.now()
  const [check, setCheck] = useState(true)
  const {validate, setValidate} = useContext(FormContext)
  const checkboxStyles = [
    classes.checkbox,
    check ? classes.checked : ''
  ]

  const changeCheckbox = () => {
    setValidate({
      ...validate,
      checkbox: !check
    })
    setCheck(!check)
  }

  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        <label htmlFor={id} className={checkboxStyles.join(' ')}>
          <input
            type="checkbox"
            onChange={changeCheckbox}
            id={id}
            checked={check}
            required={required}
          />
          {check ? <img src={checkMarker} alt="" /> : null}
        </label>
        Принимаю <a href="/">&nbsp;условия&nbsp;</a> использования
      </label>
      {
        required
          ? !check 
            ? <span className={classes.error}>Обязательное условие</span>
            : null
          :null
      }
    </div>
  )
}

export default Checkbox;