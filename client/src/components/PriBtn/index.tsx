import React from 'react'

type PribtnProps = {
    text:string;
    addStyle?:string
}

const Pribtn = ({ text, addStyle }:PribtnProps) => {
  return (
    <button className={`text-sm rounded text-white p-3 cursor-pointer bg-hmred hover:bg-orange-500 ${addStyle}`}>{text}</button>
  )
}

export default Pribtn