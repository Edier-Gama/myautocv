import { Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

const AvatarLoader = () => {
  return (
        <>
        <SkeletonCircle height={'60px'} width={'60px'}/>
        </>
  )
}

const ButtonLoader = () => {
  return (
        <Skeleton width={'380px'} height={'40px'}/>
  )
}

export { AvatarLoader, ButtonLoader }
