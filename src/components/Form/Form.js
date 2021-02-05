import Checkbox from '../Checkbox/Checkbox'
import Field from '../Field/Field'
import Select from '../Select/Select'
import Button from '../Button/Button'
import classes from './Form.module.css'
import { createContext, useState } from 'react'

export const FormContext = createContext()

export const initialValidate = {
  name: false,
  email: false,
  tel: false,
  checkbox: true,
  ready: false
}

function Form() {
  const options = [
    { title: 'Русский', value: 'rus', id: 1 },
    { title: 'Английский', value: 'eng', id: 2 },
    { title: 'Китайский', value: '中文', id: 3 },
    { title: 'Испанский', value: 'esp', id: 4 }
  ]

  const [validate, setValidate] = useState(initialValidate)

  return (
    <FormContext.Provider
      value={{ validate, setValidate }}
    >
      <form className={classes.Form}>
        <Field type="text" name="name" label="Имя" placeholder="Введите ваше имя" />
        <Field type="email" name="email" label="Email" placeholder="Введите ваше email" />
        <Field type="tel" name="phone" label="Номер телефона" placeholder="Введите номер телефона" maxLength={11} />
        <Select options={options} name="lang" label={'Язык'} />
        <Checkbox required />
        <Button title="Зарегистрироваться" />
      </form>
    </FormContext.Provider>
  )
}

export default Form;