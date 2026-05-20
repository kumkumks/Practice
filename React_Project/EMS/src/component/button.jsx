import React from 'react'

const Button = ({className,text,icon}) => {
  return (
    <button className={` ${className}`}>
        {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </button>
  )
}

export default Button