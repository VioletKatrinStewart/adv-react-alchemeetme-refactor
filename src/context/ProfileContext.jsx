import { createContext, useContext, useState } from 'react'

export const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [])

  return <ProfileContext.Provider value={{ user, setUser }}>{children}</ProfileContext.Provider>
}

const useProfile = () => {
  const context = useContext(ProfileContext)

  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }

  return context
}

export { ProfileProvider, useProfile }
