'use client'

import { UserContext } from '@/contexts/user.context'
import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 12 12"
                className={`${user.location ? '' : 'opacity-40'}`}
              >
                <path
                  fill="white"
                  d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5Zm0 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
                />
              </svg>
              <p className={`${user.location ? '' : 'opacity-40'}`}>
                {user.location || 'Not Available'}
              </p>
            </div>

            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${user.blog ? '' : 'opacity-40'}`}
              >
                <g
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeWidth="2"
                >
                  <path d="m12 17l-1.5 1.5a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a3.536 3.536 0 0 1 5 0v0" />
                  <path d="m12 7l1.5-1.5a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a3.536 3.536 0 0 1-5 0v0" />
                </g>
              </svg>
              <Link
                target="_blank"
                href={user.blog ? user.blog : 'https://www.google.com'}
                className={`cursor-pointer hover:underline ${
                  user.blog ? '' : 'opacity-40'
                }`}
              >
                {user.blog ? 'WebSite' : 'Not Available'}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-x-12 gap-y-3 sm:flex-row">
            <div className="flex w-full max-w-[14.375rem] flex-row gap-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${user.twitter_username ? '' : 'opacity-40'}`}
              >
                <path
                  fill="white"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                />
              </svg>

              <p className={`${user.twitter_username ? '' : 'opacity-40'}`}>
                {user.twitter_username || 'Not Available'}
              </p>
            </div>

            <div className="flex w-full max-w-[14.375rem] flex-row items-center gap-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 256 256"
                className={`${user.company ? '' : 'opacity-40'}`}
              >
                <path
                  fill="white"
                  d="M239.73 208H224V96a16 16 0 0 0-16-16h-44a4 4 0 0 0-4 4v124h-16V32.41a16.43 16.43 0 0 0-6.16-13a16 16 0 0 0-18.72-.69L39.12 72A16 16 0 0 0 32 85.34V208H16.27A8.18 8.18 0 0 0 8 215.47a8 8 0 0 0 8 8.53h224a8 8 0 0 0 8-8.53a8.18 8.18 0 0 0-8.27-7.47ZM76 184a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.28v-15.45a8.19 8.19 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8Zm0-56a8 8 0 0 1-8.53 8a8.19 8.19 0 0 1-7.47-8.28v-15.45a8.19 8.19 0 0 1 7.47-8.27a8 8 0 0 1 8.53 8Zm40 56a8 8 0 0 1-8.53 8a8.18 8.18 0 0 1-7.47-8.26v-15.47a8.19 8.19 0 0 1 7.47-8.26a8 8 0 0 1 8.53 8Zm0-56a8 8 0 0 1-8.53 8a8.19 8.19 0 0 1-7.47-8.26v-15.47a8.19 8.19 0 0 1 7.47-8.26a8 8 0 0 1 8.53 8Z"
                />
              </svg>
              <p className={`${user.company ? '' : 'opacity-40'}`}>
                {user.company || 'Not Available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
