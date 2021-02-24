import React, { useEffect, useState, useRef, memo } from 'react'
import { Migulation, Root } from './styles'
import { useContextProvider } from '../ContextProvider'


const Title = memo(() => {
  const LAST_WORDS = '"OPEN WORK".'
  const [state, setState] = useState([])
  const data = `Hello. Here you can see my work, to do this, click on any work on the panel, 
  and in the window that appears, click ${LAST_WORDS}`

  const myRef = useRef(null)

  const {setContext} = useContextProvider()

  if (myRef.current && myRef.current.textContent.includes(LAST_WORDS)) {
    setContext(true)
  }

  useEffect(() => {
    if (state.length <= data.length) {
      setTimeout(() => {
        setState((state) => {
          return [
            ...state,
            data.split('').slice(state.length, state.length + 1)
          ]
        })
      }, state.length === 0 ? 1000 : 40)
    }
  }, [state])

  return (
    <Root ref={myRef}>
      {state}<Migulation/>
    </Root>
  )
})

export default Title
