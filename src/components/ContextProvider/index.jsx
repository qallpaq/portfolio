import React, { useContext, createContext, useState } from 'react'


const Context = createContext()

export const useContextProvider = () => {
  return useContext(Context)
}

const ContextProvider = ({children}) => {
  const [context, setContext] = useState(false)

  return (
    <Context.Provider value={{context, setContext}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
