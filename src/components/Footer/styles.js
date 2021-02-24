import styled from 'styled-components'


const Root = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  position: relative;
  
  z-index: 2;
  
  &:before {
    content: "";
    height: 5px;
    left: 0;
    right: 0;
    background: #1fde6f;
    position: absolute;
    box-shadow: 0 0 8px #1fde6f;
    
    z-index: 1;
    
    @media (max-width: 580px) {
      display: none;
    }
  }
`

const Inner = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  margin: auto;
  background: #0C1C02;
  padding: 5px 10px;
  position: relative;
  
  z-index: 2;
  
  @media (max-width: 580px) {
    width: 100%;
    justify-content: space-evenly;
    
    & li {
      font-size: 16px;
      letter-spacing: 3px;
    }
  }
`

export { Root, Inner }
