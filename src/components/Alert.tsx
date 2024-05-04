import React from 'react'

const Alert = ({title,message}:{title:string,message?:string}) => {
  return (
    <div role="alert">
    <div className="px-4 py-2 font-bold text-white bg-red-500 rounded-t">
     {title}
    </div>
    <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
      <p>{message??"Une erreur s'est produite"}</p>
    </div>
  </div>
  )
}

export default Alert
