'use client'
import { UserContext } from '@/contexts/user.context'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Card from '@/components/Card'
import { useContext } from 'react'

export default function Home() {
  const { user } = useContext(UserContext)

  const isUserEmpty =
    Object.keys(user).length === 0 && user.constructor === Object

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center px-6 py-16 sm:px-24">
      <Header />
      <div className="mt-7 flex w-full flex-col gap-y-6">
        <Input />
        {!isUserEmpty ? <Card /> : null}
      </div>
    </main>
  )
}
