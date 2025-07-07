"use client"
import React from 'react'
import toast from 'react-hot-toast'

const page = () => {
  return (
    <div>
        <button onClick={()=>toast.success("created successfully")} className='btn btn-outline'>create button</button>
    </div>
  )
}

export default page