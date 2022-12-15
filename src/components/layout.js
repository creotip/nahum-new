import * as React from 'react'
import Header from './header'
import Container from './container'
import { Box } from '@chakra-ui/react'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <Box as="main">
        <Container className="layout-container"> {children}</Container>
        {/*{children}*/}
      </Box>
      <footer>
        <Container display="flex" justifyContent="center" my={10} dir="ltr">
          © {new Date().getFullYear()}, {` `}
          {` `}
          <a href="https://creotip.io"> creotip</a>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
