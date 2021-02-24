import React, { useState, useEffect, memo } from 'react'
import { AdditionalInfo, Button, Link, Root, Text, Title } from './styles'


const Description = memo(({state}) => {

  function detectOS() {
    const platform = navigator.platform.toLowerCase()
    const iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch']

    if (platform.includes('mac')) return 'MacOS'
    if (iosPlatforms.includes(platform)) return 'iOS'
    if (platform.includes('win')) return 'Windows'
    if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android'
    if (/linux/.test(platform)) return 'Linux'

    return 'unknown'
  }

  const {title, stack, description, link} = state

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [rads, setRads] = useState(Math.random().toFixed(2))

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString())

      setRads(Math.random().toFixed(2))
    }, 1000)

    return () => clearInterval(clock)
  }, [])

  return (
    <Root>
      <AdditionalInfo>
        Time: {time} || Radiation: {rads} RADS || OS: {detectOS()}
      </AdditionalInfo>
      <Title>{title}</Title>
      <Text>Stack: {stack}</Text>
      <Text>Description: {description}</Text>
      <div>
        <Button>
          <Link href={link} target="_blank" rel="noreferrer">open work</Link>
        </Button>
      </div>
    </Root>
  )
})

export default Description
