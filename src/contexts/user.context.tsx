'use client'

import { createContext, useState, PropsWithChildren } from 'react'
import { UserProps, UserContextDataProps } from '../interfaces'

export const UserContext = createContext({} as UserContextDataProps)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const userContextData: UserContextDataProps = {
    user,
    setUser,
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}
