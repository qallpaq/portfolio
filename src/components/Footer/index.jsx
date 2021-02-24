import React, { memo } from 'react'
import { Root, Inner } from './styles'


const Footer = memo(() => {
  return (
    <Root>
      <Inner>
        <li>+7(988)-048-76-52</li>
        <li>
          <a href="https://t.me/callpack96" target="_blank" rel="noreferrer">
            <i className="fab fa-telegram"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/qallpaq" target="_blank" rel="noreferrer">
            <i className="fab fa-github"/>
          </a>
        </li>
      </Inner>
    </Root>
  )
})

export default Footer
