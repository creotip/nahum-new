import * as React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ContainerProps extends BoxProps {
  children: ReactNode
}
const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <Box maxW="1200px" mx="auto" px={2} {...props}>
      {children}
    </Box>
  )
}

export default Container
