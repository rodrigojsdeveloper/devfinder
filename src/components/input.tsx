'use client'

import { useContext, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserContext } from '@/contexts/user.context'
import { userSchema } from '@/schemas/user.schema'
import { Loader2, Search } from 'lucide-react'
import { api } from '@/services/api'
import * as zod from 'zod'

type FormData = zod.infer<typeof userSchema>

export const Input = () => {
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
      <Search size={32} className="text-[#07f]" />
      <input
        placeholder="Search github username"
        className="w-full bg-blue-200 focus:placeholder:text-transparent"
        autoComplete="off"
        {...register('owner')}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="h-[3.125rem] w-[6.625rem] rounded-def bg-blue-300 hover:bg-blue-500 focus-visible:bg-blue-500 disabled:flex disabled:cursor-default disabled:items-center disabled:justify-center disabled:bg-blue-300"
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin text-white" />
        ) : (
          'Search'
        )}
      </button>
    </form>
  )
}
