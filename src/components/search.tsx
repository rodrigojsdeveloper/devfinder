'use client'

import { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserContext } from '@/contexts/user.context'
import { userSchema } from '@/schemas/user.schema'
import { Loader2, Search as SearchIcon } from 'lucide-react'

export const Search = () => {
  const { fetchUser, isLoading } = useContext(UserContext)

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(userSchema),
  })

  const onSubmitFunction = handleSubmit((data: FieldValues) => {
    fetchUser(data.owner, reset)
  })

  return (
    <form
      onSubmit={onSubmitFunction}
      className="flex h-[4.313rem] w-full flex-row items-center justify-between gap-x-4 rounded-xl bg-blue-300 py-2 pl-5 pr-2"
    >
      <SearchIcon size={32} className="hidden text-[#07f] sm:block" />
      <input
        placeholder="Search github username"
        className="w-full bg-blue-300 focus:placeholder:text-transparent"
        autoComplete="off"
        {...register('owner')}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="h-[3.125rem] min-w-[5rem] rounded-xl bg-blue-200 hover:bg-blue-100 focus-visible:bg-blue-100 disabled:flex disabled:cursor-default disabled:items-center disabled:justify-center disabled:bg-blue-200"
      >
        {isLoading ? (
          <Loader2 className="size-5 animate-spin text-white" />
        ) : (
          'Search'
        )}
      </button>
    </form>
  )
}
