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

  return (
    <div className="flex w-full animate-swing flex-row gap-x-6 rounded-def bg-blue-200 px-6 py-10">
      <div className="flex w-full max-w-[45.625rem] flex-col gap-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Image
            src={user.avatar_url}
            alt={user.name}
            className="rounded-full"
            width={117}
            height={117}
          />
          <div className="w-full">
            <div className="mb-1 flex w-full flex-col items-start justify-between md:flex-row">
              <h2 className="text-2xl font-extrabold">{user.name}</h2>

              <p className="text-base">Joined {formattedDate}</p>
            </div>

            <Link
              target="_blank"
              href={user.html_url ? user.html_url : 'https://www.google.com'}
              className="text-md text-blue-300 hover:text-blue-500"
            >
              @{user.login}
            </Link>

            <p className="text-md mb-7 mt-4 text-gray">{user.bio}</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-x-10 gap-y-5 rounded-def bg-blue-100 px-8 py-5 sm:flex-row">
          <div className="w-full max-w-[8.625rem]">
            <h3 className="mb-1.5 text-sm text-gray">Repos</h3>
            <p className="text-2xl font-extrabold">{user.public_repos}</p>
          </div>
          <div className="w-full max-w-[8.625rem]">
            <h3 className="mb-1.5 text-sm text-gray">Followers</h3>
            <p className="text-2xl font-extrabold">{user.followers}</p>
          </div>
          <div className="w-full max-w-[8.625rem]">
            <h3 className="mb-1.5 text-sm text-gray">Following</h3>
            <p className="text-2xl font-extrabold">{user.following}</p>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-y-3 sm:gap-5">
          <div className="flex flex-col gap-x-12 gap-y-3 sm:flex-row">
            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <MapPin
                size={20}
                className={cn(user.location ? '' : 'opacity-40')}
              />
              <p className={cn(user.location ? '' : 'opacity-40')}>
                {user.location || 'Not Available'}
              </p>
            </div>

            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <Link2 size={20} className={cn(user.blog ? '' : 'opacity-40')} />
              <Link
                target="_blank"
                href={user.blog ? user.blog : 'https://www.google.com'}
                className={cn(
                  'cursor-pointer hover:underline',
                  user.blog ? '' : 'opacity-40',
                )}
              >
                {user.blog ? 'WebSite' : 'Not Available'}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-x-12 gap-y-3 sm:flex-row">
            <div className="flex w-full max-w-[14.375rem] flex-row gap-x-5">
              <Twitter
                size={20}
                className={cn(user.twitter_username ? '' : 'opacity-40')}
              />
              <p className={cn(user.twitter_username ? '' : 'opacity-40')}>
                {user.twitter_username || 'Not Available'}
              </p>
            </div>

            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <Building
                size={20}
                className={cn(user.company ? '' : 'opacity-40')}
              />
              <p className={cn(user.company ? '' : 'opacity-40')}>
                {user.company || 'Not Available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
