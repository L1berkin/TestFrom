export const validating = (type, value) => {
  switch (type) {
    case 'email': return validateEmail(value)
    case 'text': return validateName(value)
    case 'tel': return validateTel(value)
    default: return false
  }
} 

export const validateEmail = (value) => {
  const re = /^(([^<>()[\]..,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return re.test(value)
}

export const validateName = (value) => {
  const re = /^[a-zA-Zа-яА-Я-\s]+$/
  return re.test(value)
}

export const validateTel = (value) => {
  const re = /^[\d-()+]+$/
  return re.test(value)
}