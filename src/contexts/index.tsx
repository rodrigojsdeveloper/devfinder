import { PropsWithChildren } from 'react'
import { UserContextProvider } from './user.context'

const Providers = ({ children }: PropsWithChildren) => {
  return <UserContextProvider>{children}</UserContextProvider>
}

export default Providers
