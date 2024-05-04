import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar'

const CommonLayoutmain = ({children}) => {
  return (
    <>
    <Sidebar children={children} />
    </>
  )
}

export default CommonLayoutmain
