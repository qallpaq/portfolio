import styled, { keyframes } from 'styled-components'


const migulyation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Root = styled.div`
  padding-top: 50px;
  min-height: 28px;
  width: 100%;
`

const Migulation = styled.div`
  display: inline-block;
  width: 10px;
  height: 25px;
  background: #1fde6f;
  
  transform: translateY(3px);
  animation: ${migulyation} 1s infinite;
`

export { Root, Migulation }
