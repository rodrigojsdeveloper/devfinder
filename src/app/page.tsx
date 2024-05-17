'use client'

import { useContext } from 'react'
import { UserContext } from '@/contexts/user.context'
import { Header } from '@/components/header'
import { Search } from '@/components/search'
import { Card } from '@/components/card'

export default function Home() {
  const { user } = useContext(UserContext)

  const isUserEmpty =
    Object.keys(user).length === 0 && user.constructor === Object

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center gap-7 px-6 py-16 md:px-24">
      <Header />
      <section className="flex w-full flex-col gap-y-6">
        <Search />
        {!isUserEmpty ? <Card /> : null}
      </section>
    </main>
  )
}
