import * as React from "react"
import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { FcAssistant, FcShipped, FcShop } from "react-icons/fc"

export const Strip = () => {
  return (
    <SimpleGrid columns={[1, 3]} textAlign="center" spacing={4} mb={10}>
      <Flex
        alignItems="center"
        bg="#f2f2f2"
        justifyContent="space-between"
        p={5}
        borderRadius="6px"
      >
        <Box mx={4} fontSize="xl" fontWeight="700">
          שירות מעל הכל
        </Box>
        <FcAssistant size={50} />
      </Flex>
      <Flex
        alignItems="center"
        bg="#f2f2f2"
        justifyContent="space-between"
        p={5}
        borderRadius="6px"
      >
        <Box mx={4} fontSize="xl" fontWeight="700">
          הובלה מהירה
        </Box>
        <FcShipped size={50} />
      </Flex>

      <Flex
        alignItems="center"
        bg="#f2f2f2"
        justifyContent="space-between"
        p={5}
        borderRadius="6px"
      >
        <Box mx={4} fontSize="xl" fontWeight="700">
          מבחר ענק של ציוד
        </Box>
        <FcShop size={50} />
      </Flex>
    </SimpleGrid>
  )
}
