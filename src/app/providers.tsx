/* eslint-disable react/react-in-jsx-scope */
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Providers ({ children }: { children: React.ReactNode }): any {
  return <ChakraProvider>{children}</ChakraProvider>
}
