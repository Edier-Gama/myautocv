'use client'
import { useEffect, useState } from 'react'
import { getUserSession } from '@/utils/supabase/get-user-session'

function getUserSessionStatus () {
  const [session, setSession]: any = useState()
  const [userAvatar, setUserAvatar]: any = useState()

  useEffect(() => {
    const getSession = async () => {
      const userSession = await getUserSession()
      setSession(userSession)
      setUserAvatar(userSession?.user.user_metadata.picture)
    }
    getSession()
  }, [])
  return { session, userAvatar }
}

export { getUserSessionStatus }
