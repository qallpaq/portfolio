import styled, { keyframes } from 'styled-components'


const test = keyframes`
  0% {
    max-height: 10px;
    overflow: hidden;
  }
  
  100% {
    max-height: 600px;
    overflow: visible;
  }
`

const Root = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 5px solid #1fde6f;
  border-bottom: 5px solid #1fde6f;
  position: relative;
  
  animation: ${test} .5s ease-out forwards;
  
  @media (max-width: 1200px) {
    width: 100%;
  }
  
  &:before {
    content: "";
    width: 5px;
    height: 90px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    top: -1px;
    right: 0;
    background: #1fde6f;
    position: absolute;
  }
  
  &:after {
    content: "";
    width: 5px;
    height: 90px;
    clip-path: polygon(0 100%, 100% 100%, 55% 0);
    bottom: -1px;
    left: 0;
    background: #1fde6f;
    position: absolute;
  }
`

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
`

const Text = styled.p`
  margin-bottom: 20px;
`

const Button = styled.button`
  display: inline-block;
  background: transparent;
  text-shadow: 0 0 10px #1fde6f;
  border: none;
  padding: 5px 10px;
  border: 2px solid #1fde6f;
  box-shadow: 0 0 5px #1fde6f;
  transition: .3s;
  cursor: pointer;
  
  &:hover {
    background: #1fde6f;
  }
  
  &:hover a {
    color: #0C1C02;
  }
`

const Link = styled.a`
  transition: .3s;
  cursor: pointer;
  font-family: 'DotGothic16', sans-serif;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 800;
`

const AdditionalInfo = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  
  @media (max-width: 1200px) {
    display: none;
  }
`

export { Root, Title, Text, Button, AdditionalInfo, Link }
