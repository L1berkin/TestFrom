import { createContext, useState } from "react";

export const FormContext = createContext()

function FormContextHoc({ children, validateFields }) {
  const [validate, setValidate] = useState(validateFields || {})

  return (
    <FormContext.Provider
      value={{validate, setValidate}}
    >
      { children }
    </FormContext.Provider>
  )
}

export default FormContextHoc;