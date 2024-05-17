'use client'

import { createContext, useState, PropsWithChildren } from 'react'
import { UserProps, UserContextDataProps } from '../interfaces'
import { api } from '@/services/api'
import { FieldValues, UseFormReset } from 'react-hook-form'

export const UserContext = createContext({} as UserContextDataProps)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchUser = (owner: string, reset: UseFormReset<FieldValues>) => {
    setIsLoading(true)

    api
      .get(`${owner}`)
      .then((res) => {
        setUser(res.data)
        reset()
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }

  const userContextData: UserContextDataProps = {
    user,
    isLoading,
    fetchUser,
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}
