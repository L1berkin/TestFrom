import classes from './Title.module.css'

function Title() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Регистрация</h1>
      <p className={classes.subtitle}>
        Уже есть аккаунт? <a href="/" className={classes.link}>Войти</a>
      </p>
    </div>
  )
}

export default Title;