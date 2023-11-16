import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='text-center bg-gray-600 text-white text-3xl py-2'> User: {id}</div>
  )
}

export default User