'use client'

import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserContext } from '@/contexts/user.context'
import { Building, Link2, MapPin, Twitter } from 'lucide-react'
import { cn } from '@/utils/cn'

export const Card = () => {
  const { user } = useContext(UserContext)

  const date = new Date(user.created_at)
  const formattedDate = `${date.getDate()} ${date.toLocaleString('en', {
    month: 'short',
  })} ${date.toLocaleString('en', {
    year: 'numeric',
  })}`

  const STATISTICS = [
    {
      title: 'Repos',
      description: user.public_repos,
    },
    {
      title: 'Followers',
      description: user.followers,
    },
    {
      title: 'Following',
      description: user.following,
    },
  ]

  const CONTACT_INFO = [
    {
      Icon: Twitter,
      contact: user.twitter_username,
    },
    {
      Icon: Building,
      contact: user.company,
    },
  ]

  return (
    <div className="flex w-full animate-swing flex-row gap-x-6 rounded-xl bg-blue-300 px-6 py-10">
      <section className="flex w-full max-w-[45.625rem] flex-col gap-y-4">
        <section className="flex flex-col gap-4 sm:flex-row">
          <Image
            src={user.avatar_url}
            alt={user.name}
            width={117}
            height={117}
            className="no-select size-36 rounded-full"
          />
          <div className="w-full">
            <div className="mb-1 flex w-full flex-col items-start justify-between md:flex-row">
              <h2 className="text-2xl font-extrabold">{user.name}</h2>
              <p className="text-base">Joined {formattedDate}</p>
            </div>

            <Link
              target="_blank"
              href={user.html_url ? user.html_url : 'https://www.google.com'}
              className="text-md text-blue-200 hover:text-blue-100"
            >
              @{user.login}
            </Link>

            <p className="text-md mb-7 mt-4 text-gray-100">{user.bio}</p>
          </div>
        </section>

        <ul className="flex w-full flex-col items-start gap-x-10 gap-y-5 rounded-xl bg-blue-400 px-8 py-5 sm:flex-row">
          {STATISTICS.map((statistic, index) => (
            <li
              key={`${statistic}-${index}`}
              className="flex w-full max-w-[8.625rem] flex-col gap-1.5"
            >
              <h3 className="text-sm text-gray-100">{statistic.title}</h3>
              <p className="text-2xl font-extrabold">{statistic.description}</p>
            </li>
          ))}
        </ul>

        <section className="mt-8 flex w-full flex-col gap-y-3 sm:gap-5">
          <div className="flex flex-col gap-x-12 gap-y-3 sm:flex-row">
            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <MapPin
                className={cn('size-5', !user.location && 'opacity-40')}
              />
              <p className={cn(!user.location && 'opacity-40')}>
                {user.location || 'Not Available'}
              </p>
            </div>

            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <Link2 className={cn('size-5', !user.blog && 'opacity-40')} />
              <Link
                target="_blank"
                href={user.blog ? user.blog : ''}
                className={cn(
                  'cursor-pointer hover:underline',
                  !user.blog && 'opacity-40',
                )}
              >
                {user.blog ? 'WebSite' : 'Not Available'}
              </Link>
            </div>
          </div>

          <ul className="flex flex-col gap-x-12 gap-y-3 sm:flex-row">
            {CONTACT_INFO.map(({ Icon, contact }, index) => (
              <li
                key={`${contact}-${index}`}
                className="flex w-full max-w-[14.375rem] flex-row gap-x-5"
              >
                <Icon className={cn('size-5', !contact && 'opacity-40')} />
                <p className={cn(!contact && 'opacity-40')}>
                  {contact || 'Not Available'}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  )
}
