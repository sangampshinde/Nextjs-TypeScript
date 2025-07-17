"use client"
import React from 'react'

interface Props{
    error:Error,
    reset:()=>void;
    
}

const ErrorPage = ({error,reset}:Props) => {
    console.log("error",error)
  return (
    <>
    <div>
        Unexpected error Has Occured!
    </div>
    <button onClick={()=>reset()}>Reset</button>

    
    
    
    </>
    
  )
}

export default ErrorPage;