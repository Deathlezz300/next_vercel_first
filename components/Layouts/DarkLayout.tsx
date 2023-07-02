import React from 'react'

type props={
    children:React.ReactNode
}

export const DarkLayout = ({children}:props) => {
  return (
    <div style={{backgroundColor:'white'}}>

        <h3>DarkLayout</h3>
        <div>
            {children}
        </div>

    </div>
  )
}
