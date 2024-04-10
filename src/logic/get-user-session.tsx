'use client'
import { useEffect, useState } from 'react'
import { getUserSession } from '@/utils/supabase/getUserSession'

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
  }, [1, 2, 3, 4, 5])
  return { session, userAvatar }
}

export { getUserSessionStatus }
