import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  opacity: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 200px;
  
  animation: ${({context}) => context ? fadeIn : 'none'}  .8s ease forwards;
  
  @media(max-width: 1200px) {
    flex-wrap: wrap;
    margin-top: 150px;
  }
  
  @media(max-width: 580px) {
    margin-top: 100px;
  }
`

export { Content, Wrapper }
