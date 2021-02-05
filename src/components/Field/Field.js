import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../Form/Form';
import classes from './Field.module.css'

function Field(props) {
  const id = '' + Math.random() + Date.now()
  const [value, setValue] = useState('')
  const [validateField, setValidateField] = useState('true')
  const {validate, setValidate} = useContext(FormContext)

  useEffect(()=> {
    if (validate.ready === false) {
      setValue('')
      setValidate({
        ...validate,
        ready: true
      })
    }
  }, [validate, setValidate])

  const changeValueHandler = (e) => {
    const value = e.target.value
    if (props.type === 'email') {
      const valid = validateEmail(value)
      setValidateField(valid) 
      setValidate({...validate, email: valid})
    } else if (props.type === 'text') {
      const valid = validateName(value)
      setValidateField(valid)
      setValidate({...validate, name: valid})
    } else if (props.type === 'tel') {
      const valid = validateTel(value)
      setValidateField(valid)
      setValidate({...validate, tel: valid})
    }

    setValue(value)
  }

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]..,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(email)
  }

  const validateName = (name) => {
    const re = /^[a-zA-Zа-яА-Я-\s]+$/
    return re.test(name)
  }

  const validateTel = (tel) => {
    const re = /^[\d-()+]+$/
    return re.test(tel)
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
      { validateField ? null : <span className={classes.error}>Введено не корректное значение</span>}
    </div>
  )
}

export default Field;