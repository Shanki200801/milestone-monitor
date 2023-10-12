'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.webp'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [view, setView] = useState('sign-in')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.push('/')
    router.refresh()
  }

  return (
    <div className="flex-1 flex flex-col justify-center gap-2 bg-cover h-screen w-screen py-16 px-96 bg-[#3b9b9b]">
      <div className="bg-150%  bg-center bg-[url('../public/login-bg.svg')] h-full flex justify-center items-center">
      <div className='flex flex-col'>
        <Image src={logo} width={150} height={150} alt={'logo'} className='self-center'/>
      {view === 'check-email' ? (
        <p className="text-center text-foreground">
          Check <span className="font-bold">{email}</span> to continue signing
          up
        </p>
      ) : (
        <form
          className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          onSubmit={handleSignIn}
        >
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
          />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
          />
          {view === 'sign-in' && (
            <>
              <button className="bg-green-700 rounded px-4 py-2 text-white mb-6">
                Sign In
              </button>
             
            </>
          )}

        </form>
      )}    
      </div>
      
      </div>
      
    </div>
  )
}
