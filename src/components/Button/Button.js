import { useContext, useEffect, useState } from 'react';
import { FormContext, initialValidate } from '../Form/Form';
import classes from './Button.module.css'

function Button({ title }) {
  const [disabled, setDisabled] = useState(true)
  const { validate, setValidate } = useContext(FormContext)

  useEffect(() => {
    const notValidFields = Object.values(validate).filter(el => el !== true)
    setDisabled(notValidFields.length !== 0)
  }, [validate])

  const sendForm = async (e) => {
    e.preventDefault()
    const formEls = e.target.form.querySelectorAll('.formField')
    const sendBody = {}
    
    formEls.forEach(el => {
      if (el.type) {
        sendBody[el.name] = el.value
      } else {
        sendBody[el.dataset.name] = el.dataset.value
      }
    })

    const response = await fetch('http://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(sendBody)
    })

    const res = await response.json()
    console.log(res)
    setValidate(initialValidate)
  }

  return (
    <button
      onClick={sendForm}
      type="submit"
      className={classes.Button}
      disabled={disabled}
    >{title}</button>
  )
}

export default Button;