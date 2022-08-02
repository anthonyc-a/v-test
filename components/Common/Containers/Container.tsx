import React from 'react'

const Container = ({children}: any) => {
  return (
    <div className='w-full px-3 md:px-8 lg:px-11'>
        {children}
    </div>
  )
}

export default Container