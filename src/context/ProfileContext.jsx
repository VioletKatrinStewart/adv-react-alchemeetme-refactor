import { createContext, useContext, useMemo, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState('')

  const value = useMemo(() => ({ profile, setProfile}), [profile])

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

const useProfile = () => {
  const context = useContext(ProfileContext)

  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }

  return context
}

export { ProfileProvider, useProfile }