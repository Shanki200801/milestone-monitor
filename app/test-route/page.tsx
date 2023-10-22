import React from 'react'
import { fdpQuery, journalQuery, patentsQuery }  from '../api/dbfunctions'
import { conferenceQuery } from '../api/dbfunctions'

const page = () => {
    // const returnedJSX = conferenceQuery(true);
    // const returnedJSX = fdpQuery(true);
    // const returnedJSX = journalQuery(true);
    const returnedJSX = patentsQuery(true);
  return (
    <div>{returnedJSX}</div>
  )
}

export default page