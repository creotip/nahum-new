import * as React from 'react'
import Logo from './logo'
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  IconButton,
  useDisclosure,
  DrawerBody,
  DrawerContent,
  Input,
  DrawerFooter,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Drawer,
} from '@chakra-ui/react'
import Container from './container'
import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import { Link } from 'gatsby'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container
      as="header"
      justifyContent="space-between"
      alignItems="center"
      display="grid"
      gridAutoFlow="column"
      gridTemplateColumns="1fr 1fr 1fr"
      mb={4}
    >
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box as="nav">
        <IconButton
          onClick={onOpen}
          display={['block', 'block', 'none']}
          variant="ghost"
          aria-label="mobile menu"
          icon={<HiOutlineMenuAlt3 size={28} />}
        />
        <List display={['none', 'none', 'flex']}>
          <ListItem>
            <Button variant="ghost" fontWeight="400">
              אודות
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="ghost" fontWeight="400">
              צור קשר
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="ghost" fontWeight="400">
              לקוחות
            </Button>
          </ListItem>
        </List>
      </Box>

      <Link to="/">
        <Logo />
      </Link>
      <Flex alignItems="center" justifyContent="flex-end">
        <a href="https://wa.me/972532481519">
          <IconButton
            variant="ghost"
            aria-label="whatsapp"
            icon={<BsWhatsapp color="#25D366" size={24} />}
          />
        </a>
        <Box mr={4} display={['none', 'none', 'block']}>
          054-4444444
        </Box>
      </Flex>
    </Container>
  )
}

export default Header
