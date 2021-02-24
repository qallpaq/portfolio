import React, { memo } from 'react'
import { Root, Item } from './styles'


const Works = memo(({setCurrentItem, state}) => {
  const items = [
    {
      link: 'https://qallpaq.github.io/plaxer/',
      title: 'Plaxer',
      stack: 'React, Redux, Material UI, Framer Motion, react-intersection-observer',
      description: 'A site on the topic of gaming, where you can see the results of the latest matches for such games as: Dota 2, CSGO, PUBG, Fortnite.'
    },
    {
      link: 'https://qallpaq.github.io/Excel/',
      title: 'Excel',
      stack: 'HTML, CSS, JavaScript',
      description: 'Excel on vanilla javascript in OOP style. Work done according to the course.'
    },
    {
      link: 'https://qallpaq.github.io/albertos/',
      title: 'Alberto',
      stack: 'React, Redux, BEM, Axios, Firebase',
      description: 'Online shop where you can order pizza.'
    },
    {
      link: 'https://qallpaq.github.io/spaceX/',
      title: 'SpaceX',
      stack: 'React, Redux, BEM, Axios, SpaceX-API',
      description: 'A site dedicated to SpaceX. There you can see rockets, ships, dragons available at SpaceX.'
    }
  ]

  return (
    <Root>
      {items.map(item => (
        <Item
          className={`${item.link === state.link ? 'active' : ''}`}
          key={item.link}
          onClick={() => setCurrentItem(item)}
        >
          {item.title}
        </Item>))}
    </Root>
  )
})

export default Works
