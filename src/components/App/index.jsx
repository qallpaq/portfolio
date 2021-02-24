import React, { useState, memo } from 'react'
import GlobalStyle from '../../globalStyle'
import Works from '../Works'
import Description from '../Desctiption'
import Title from '../Title'
import Footer from '../Footer'
import { Content, Wrapper } from './styles'
import { useContextProvider } from '../ContextProvider'


const App = memo(() => {
  const [state, setState] = useState({})

  const setCurrentItem = item => {
    setState(item)
  }

  const {context} = useContextProvider()

  return (
    <Wrapper>
      <GlobalStyle/>
      <Title/>
      {context &&
      <>
        <Content context={context}>
          <Works setCurrentItem={setCurrentItem} state={state}/>
          {state.link ? <Description state={state}/> : null}
        </Content>
        <Footer/>
      </>
      }
    </Wrapper>
  )
})

export default App
