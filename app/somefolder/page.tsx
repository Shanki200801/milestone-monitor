import React from 'react'
import { addStaff } from '../api/dbfunctions'

const page = () => {
  return (
    <div>
        <button onClick={addStaff}></button>
    </div>
  )
}

export default page