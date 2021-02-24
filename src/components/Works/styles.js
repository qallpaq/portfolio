import styled from 'styled-components'


const Root = styled.ul`
  width: 30%;
  margin-left: 10px;
  
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: 0;
  }
`

const Item = styled.li`
  display: table;
  position: relative;
  margin: 5px 0;
  font-size: 25px;
  cursor: pointer;
  color: #1fde6f;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: 0 0 10px #1fde6f;
  
  &:before {
    display: none;
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #1fde6f;
    box-shadow: 0 0 10px #1fde6f;
    
    @media (max-width: 580px) {
      width: 7px;
      height: 7px;
      left: -10px;
    }
  }
  
  &.active&:before {
    display: block;
  }
  
  @media (max-width: 580px) {
    font-size: 18px;
  }
`

export { Root, Item }
