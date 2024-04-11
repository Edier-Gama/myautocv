import { Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

const AvatarLoader = () => {
  return (
        <div className='ml-3'>
        <SkeletonCircle height={'60px'} width={'60px'}/>
        </div>
  )
}

const ButtonLoader = () => {
  return (
    <Skeleton width={'380px'} height={'45px'} borderRadius={'10px'}/>
  )
}

export { AvatarLoader, ButtonLoader }
