'use client'

import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { useEffect } from 'react'

const driverObj = driver({
  showProgress: true,
  animate: true,
  showButtons: ['close'],
  steps: [
    {
      element: '#work',
      popover: {
        title: 'This is my work timeline!',
        description:
          'Look what companies and project that i build in my entire life!',
      },
    },
    {
      element: '#hubxp',
      popover: {
        title: 'Here i lost my brain',
        description: 'HAHAHAHAHAHAHAHAHA',
      },
    },
  ],
})

export const Driver = () => {
  console.log('ai tesao')
  useEffect(() => {
    driverObj.drive()
  }, [])

  return <></>
}
