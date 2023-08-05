'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { addStaffData, create } from './utilfns'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
const page = () => {
    

    const [name, setName] = useState('');
    const [staffID, setStaffID] = useState('');
    const [department, setDepartment] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    

  //NOTE: This shows the format I am following to handle form submits, use the functions exported from api/dbfunctions instead
    const addStaffDataWrapper = async(e: React.FormEvent<HTMLFormElement>, args: [string, string, string, string, string, string, string]) => {
        
        e.preventDefault();
        await addStaffData(...args);
        await create(email);

    }

    
  return (
    <div className='bg-black p-10 text-white'>
    <Popover >
      <PopoverTrigger asChild>
        <button className='p-3 bg-white text-black'>Open popover</button>
      </PopoverTrigger>
      <PopoverContent className="w-100">
        <div className="flex">
          <form onSubmit={(e)=> addStaffDataWrapper(e, [name, staffID, department, role, phone, email, password])}>
            <label>Staff name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br/>
            <label>Staff ID</label>
            <input type="text" onChange={(e) => setStaffID(e.target.value)} value={staffID} /><br/>
            <label>Department</label>
            <input type="text" onChange={(e) => setDepartment(e.target.value)} value={department} /><br/>
            <label>Phone number</label>
            <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br/>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} /><br/>
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br/>
            <label>Role</label>
            <select id="roles" onChange={(e) => setRole(e.target.value)} value={role} >Select role
                <option value='editor'>Editor</option>
                <option value='staff'>Staff</option>
            </select><br/>
            <button>Submit</button>
          </form>
        </div>
      </PopoverContent>
    </Popover>   
    </div>
  )
}

export default page