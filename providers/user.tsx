"use client"

import type { User } from "@supabase/supabase-js"
import type { ReactNode } from "react"
import { createContext, useContext } from "react"

type XeenoUser = User | null

const UserContext = createContext<XeenoUser>(null)

interface UserProviderProps {
  children: ReactNode
  user: XeenoUser
}

export const UserProvider = ({ children, user }: UserProviderProps) => (
  <UserContext.Provider value={user}>{children}</UserContext.Provider>
)

export const useUser = (): XeenoUser => {
  const ctx = useContext(UserContext)

  if (!ctx) {
    throw new Error("useUser must be used inside a UserProvider.")
  }

  return ctx
}
