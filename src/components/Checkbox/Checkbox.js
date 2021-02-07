import { useContext, useState } from 'react'
import classes from './Checkbox.module.css'
import checkMarker from '../../assets/icons/check.png'
import { FormContext } from '../../hoc/FormContextHoc'

function Checkbox({ name, checked }) {
  const id = '' + Math.random() + Date.now()
  const [check, setCheck] = useState(checked || false)
  const {validate, setValidate} = useContext(FormContext)

  const checkboxStyles = [
    classes.checkbox,
    check ? classes.checked : ''
  ]

  const changeCheckbox = () => {
    if (validate.hasOwnProperty(name)) {
      setValidate({
        ...validate,
        [name]: !check
      })
    }
    setCheck(!check)
  }

  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        <label htmlFor={id} className={checkboxStyles.join(' ')}>
          <input
            type="checkbox"
            className="formField"
            onChange={changeCheckbox}
            name={name}
            id={id}
            value={check}
            checked={check}
          />
          {check ? <img src={checkMarker} alt="" /> : null}
        </label>
        Принимаю <a href="/">&nbsp;условия&nbsp;</a> использования
      </label>
      {
        validate.hasOwnProperty(name)
          ? !check 
            ? <span className={classes.error}>Обязательное условие</span>
            : null
          :null
      }
    </div>
  )
}

export default Checkbox;