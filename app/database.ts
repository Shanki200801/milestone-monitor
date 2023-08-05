'use server'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
//fetch items
export async function getAllStaff(){
    const supabase = createClientComponentClient()
    const {data, error} = await supabase.from('faculty').select('*')
    if(error) {
        throw error
    }
    return data
}
export async function getStaff(department: string) {
    const supabase = createClientComponentClient()
    const {data, error} = await supabase.from('faculty').select('*').eq('staff_department', department)
    if(error) {
        throw error
    }
    return data

}


//insert items

//delete items