'use client';
import { addStaff } from "@/app/api/dbfunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddStaff = () => {

    const router = useRouter();
    const [facultyID, setFacultyID] = useState('');
    const [facultyName, setFacultyName] = useState('');
    const [dept, setDept] = useState('');
    const [role, setRole] = useState('');
    const [phno, setPhno] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        addStaff(facultyName, facultyID, dept, role, phno, email, pwd);
        router.push('/');
    }
    return(
        <>
            <div className="">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label>Faculty ID</label>
                    <input 
                        type="text"
                        required 
                        value={facultyID} 
                        onChange={(e)=>setFacultyID(e.target.value)}
                    />
                    <label>Name</label>
                    <input 
                        type="text"
                        required
                        value={facultyName}
                        onChange={(e)=>setFacultyName(e.target.value)}
                    />
                    <label>Department</label>
                    <input 
                        type="text"
                        required
                        value={dept}
                        onChange={(e)=>setDept(e.target.value)}
                    />
                    <label>Role</label>
                    <input 
                        type="text"
                        required
                        value={role}
                        onChange={(e)=>setRole(e.target.value)}
                    />
                    <label>Phone Number</label>
                    <input 
                        type="text"
                        required
                        value={phno}
                        onChange={(e)=>setPhno(e.target.value)}
                    />
                    <label>University Email</label>
                    <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label>Password for user</label>
                    <input 
                        type="text"
                        required
                        value={pwd}
                        onChange={(e)=>setPwd(e.target.value)}
                    />
                    <button type="submit">Create Staff Account</button>
                </form>
            </div>
        </>
    )
}

export default AddStaff;