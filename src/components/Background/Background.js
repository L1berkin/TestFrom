import classes from './Background.module.css'

function Background({onClick, dark}) {
  const cls = [
    classes.Background,
    dark ? classes.dark : ''
  ]
  
  return (
    <div 
      onClick={onClick}
      className={cls.join(' ')}
    ></div>
  )
}

export default Background;