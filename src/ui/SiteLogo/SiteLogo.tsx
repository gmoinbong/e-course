import React from 'react'
import icon from '@media/icon_education.png'
import Image from 'next/image'
function SiteLogo() {
  return (
    <figure>
      <Image src={icon} alt='Site logo'></Image>
    </figure>
  )
}

export default SiteLogo