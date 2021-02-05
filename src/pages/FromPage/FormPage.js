import Form from "../../components/Form/Form";
import Title from "../../components/Title/Title";
import classes from './FormPage.module.css'

function FormPage() {
  return (
    <main className={classes.Form}>
      <Title />
      <Form />
    </main>
  )
}

export default FormPage;