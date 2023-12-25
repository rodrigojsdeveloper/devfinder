'use client'

import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserContext } from '@/contexts/user.context'
import userSchema from '@/schemas/user.schema'
import { useContext, useState } from 'react'
import api from '@/services/api'
import * as zod from 'zod'

type FormData = zod.infer<typeof userSchema>

const Input = () => {
  const { setUser } = useContext(UserContext)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const schema = zod.object({
    owner: zod.string().min(1),
  })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmitFunction = (data: FieldValues) => {
    setIsLoading(true)

    const rowData: FormData = {
      owner: data.owner,
    }
    api
      .get(`${rowData.owner}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex h-[4.313rem] w-full flex-row items-center justify-between gap-x-4 rounded-def bg-blue-200 py-2 pl-5 pr-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="#07f"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
        />
        <path
          fill="none"
          stroke="#07f"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
      <input
        placeholder="Search github username"
        className="w-full bg-blue-200 focus:placeholder:text-transparent"
        autoComplete="off"
        {...register('owner')}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="h-[3.125rem] w-[6.625rem] rounded-def bg-blue-300 hover:bg-blue-500 active:bg-blue-300 disabled:flex disabled:cursor-default disabled:items-center disabled:justify-center disabled:bg-blue-300"
      >
        {isLoading ? (
          <svg
            className="h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          'Search'
        )}
      </button>
    </form>
  )
}

export default Input
