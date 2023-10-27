import { UserContextProvider } from './user.context'
import { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return <UserContextProvider>{children}</UserContextProvider>
}

export default Providers
