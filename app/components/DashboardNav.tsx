'use client'

import React from 'react'
import { CreditCard, Home, Settings } from "lucide-react";

export const navItems =[
 { name:'Home',href:'/dashboard', icon: Home},
 { name:'Setting',href:'/dashboard/settings', icon: Settings},
 { name:'Billing',href:'/dashboard/billing', icon: CreditCard},
]

const DashboardNav = () => {
  return (
    <nav className='grid items-start gap-2'></nav>
  )
}

export default DashboardNav