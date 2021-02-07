import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../hoc/FormContextHoc';
import { validating } from '../../validate/validate';
import classes from './Field.module.css'

function Field(props) {
  const id = '' + Math.random() + Date.now()
  const [value, setValue] = useState('')
  const [initialComponent, setInitialComponent] = useState(true)
  const { validate, setValidate } = useContext(FormContext)

  useEffect(() => {
    if (validate.reset) {
      setValidate({
        ...validate,
        reset: false
      })
      setValue('')
      setInitialComponent(true)
    }
  }, [validate, setValidate])

  const changeValueHandler = (e) => {
    const newValue = e.target.value
    if (validate.hasOwnProperty(props.name)) {
      setValidate({ ...validate, [props.name]: validating(props.type, newValue) })
    }

    if (initialComponent) {
      setInitialComponent(false)
    }

    setValue(newValue)
  }

  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.title}>{props.label}</label>
      <input
        className={classes.input + ' formField'}
        type={props.type}
        id={id}
        name={props.name}
        value={value}
        onChange={changeValueHandler}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
      { 
        validate.hasOwnProperty(props.name) 
          ? validate[props.name] || initialComponent 
            ? null 
            : <span className={classes.error}>Введено не корректное значение</span>
          : null
      }
    </div>
  )
}

export default Field;