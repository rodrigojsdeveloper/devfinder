'use client'
import { createContext, useState, PropsWithChildren } from 'react'
import { IUserProps, IUserContextData } from '../interfaces'

const UserContext = createContext({} as IUserContextData)

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps)

  const userContextData: IUserContextData = {
    user,
    setUser,
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
