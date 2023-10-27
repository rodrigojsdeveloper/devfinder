'use client'
import { UserContext } from '@/contexts/user.context'
import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="flex w-full flex-row gap-x-6 rounded-def bg-blue-200 px-10 py-12">
      <div className="flex flex-col justify-between">
        <Image
          src={user.avatar_url}
          alt={user.name}
          className="rounded-full"
          width={117}
          height={117}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 256"
        >
          <path
            fill="white"
            d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.15a16 16 0 0 0-9.11 28.06l45.11 39.42l-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31l51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6l45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5l-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-16.54 0l-51 31l13.46-58.6a16 16 0 0 0-5.08-15.71L32 102.35a.37.37 0 0 1 0-.09l59.44-5.14a16 16 0 0 0 13.35-9.75L128 32.08l23.2 55.29a16 16 0 0 0 13.35 9.75l59.45 5.14v.07Z"
          />
        </svg>
      </div>

      <div className="w-full max-w-730">
        <div className="mb-1 flex w-full flex-row items-center justify-between">
          <h2 className="text-2xl font-extrabold">{user.name}</h2>

          <p className="text-base">Joined {user.created_at}</p>
        </div>

        <Link
          target="_blank"
          href={user.html_url ? user.html_url : 'https://www.google.com'}
          className="text-md text-blue-300 hover:text-blue-500"
        >
          @{user.login}
        </Link>

        <p className="text-md mb-7 mt-4 text-gray">{user.bio}</p>

        <div className="flex w-full flex-row items-center gap-x-10 rounded-def bg-blue-100 px-8 py-5">
          <div className="w-full max-w-138">
            <h3 className="mb-1.5 text-sm text-gray">Repos</h3>
            <p className="text-2xl font-extrabold">{user.public_repos}</p>
          </div>
          <div className="w-full max-w-138">
            <h3 className="mb-1.5 text-sm text-gray">Followers</h3>
            <p className="text-2xl font-extrabold">{user.followers}</p>
          </div>
          <div className="w-full max-w-138">
            <h3 className="mb-1.5 text-sm text-gray">Following</h3>
            <p className="text-2xl font-extrabold">{user.following}</p>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col gap-5">
          <div className="flex flex-row gap-x-12">
            <div className="max-w-230 flex w-full flex-row items-center gap-x-5">
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

            <div className="max-w-230 flex w-full flex-row items-center gap-x-5">
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

          <div className="flex flex-row items-center gap-x-12">
            <div className="max-w-230 flex w-full flex-row gap-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className={`${user.twitter_username ? '' : 'opacity-40'}`}
              >
                <path
                  fill="white"
                  d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5Z"
                />
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082ZM17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className={`${user.twitter_username ? '' : 'opacity-40'}`}>
                {user.twitter_username || 'Not Available'}
              </p>
            </div>

            <div className="max-w-230 flex w-full flex-row items-center gap-x-5">
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
