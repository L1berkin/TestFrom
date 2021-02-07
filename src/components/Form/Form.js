import Checkbox from '../Checkbox/Checkbox'
import Field from '../Field/Field'
import Select from '../Select/Select'
import Button from '../Button/Button'
import classes from './Form.module.css'
import FormContextHoc from '../../hoc/FormContextHoc'

function Form() {
  const options = [
    { title: 'Русский', value: 'rus', id: 1 },
    { title: 'Английский', value: 'eng', id: 2 },
    { title: 'Китайский', value: '中文', id: 3 },
    { title: 'Испанский', value: 'esp', id: 4 }
  ]
  // Объект формируется = {component.name: initialValidation}
  const initialContext = {
    name: false,
    email: false,
    phone: false,
    check: true,
    reset: true
  }

  return (
    <FormContextHoc
      validateFields={initialContext}
    >
      <form className={classes.Form}>
        <Field type="text" name="name" label="Имя" placeholder="Введите ваше имя" />
        <Field type="email" name="email" label="Email" placeholder="Введите ваш email" />
        <Field type="tel" name="phone" label="Номер телефона" placeholder="Введите номер телефона" maxLength={11} />
        <Select options={options} name="lang" label={'Язык'} />
        <Checkbox name="check" checked/>
        <Button title="Зарегистрироваться" initialValidate={initialContext} />
      </form>
    </FormContextHoc>
  )
}

export default Form;