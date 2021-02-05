import { Fragment, useState } from 'react';
import arrowDown from '../../assets/icons/arrow-down.png'
import arrowUp from '../../assets/icons/arrow-up.png'
import Background from '../Background/Background';
import classes from './Select.module.css'

function Select({ options, label, name }) {
  const [dropdown, setDropdown] = useState(false)
  const [value, setValue] = useState(options[0].value)
  const [title, setTitle] = useState(options[0].title)
  const selectStyles = [
    classes.Select,
    dropdown ? classes.open : ''
  ]

  const toggleSelectHandler = () => {
    setDropdown(!dropdown)
  }

  const selectHandler = (e) => {
    const value = e.target.dataset.value
    const title = e.target.textContent
    setTitle(title)
    setValue(value)
    setDropdown(!dropdown)
  }

  return (
    <Fragment>
      {dropdown ? <Background onClick={toggleSelectHandler} /> : null}
      <div className={selectStyles.join(' ')}>
        <span className={classes.label}>{label}</span>
        <div className={classes.input + ' formField'}
          data-value={value}
          data-name={name}
          onClick={toggleSelectHandler}
        >
          <span>{title}</span>
          <img src={dropdown ? arrowUp : arrowDown} alt="open"></img></div>
        <div className={classes.dropdown}>
          <ul className={classes.list}>
            {
              options.map(el => (
                <li
                  className={classes.list__item}
                  onClick={selectHandler}
                  key={el.id}
                  id={el.id}
                  data-value={el.value}
                >{el.title}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Select;