'use client'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserContext } from '@/contexts/user.context'
import userSchema from '@/schemas/user.schema'
import { useContext } from 'react'
import api from '@/services/api'
import * as zod from 'zod'

type FormData = zod.infer<typeof userSchema>

const Input = () => {
  const { setUser } = useContext(UserContext)

  const schema = zod.object({
    owner: zod.string().min(1),
  })

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmitFunction = (data: FieldValues) => {
    const rowData: FormData = {
      owner: data.owner,
    }
    api
      .get(`${rowData.owner}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error(error))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex h-69 w-full flex-row items-center justify-between gap-x-4 rounded-def bg-blue-200 py-2 pl-5 pr-2"
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
        className="w-full bg-blue-200"
        autoComplete="off"
        {...register('owner')}
      />
      <button
        type="submit"
        className="h-50 w-106 rounded-def bg-blue-300 hover:bg-blue-500"
      >
        Search
      </button>
    </form>
  )
}

export default Input
