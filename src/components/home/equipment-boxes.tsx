import * as React from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"

export const equipment = [
  "אוהלים",
  "כסאות",
  "שולחנות",
  "מתנפחים לילדים",
  "ציוד לאירועים",
  "פינות ישיבה",
  "הפעלות לילדים",
  "תאורה",
  "הצללות",
]

export const EquipmentBoxes = () => {
  return (
    <SimpleGrid columns={[2, 2, 4]} spacing={[4, 10]}>
      {equipment.map((item, index) => (
        <Box
          key={index}
          textAlign="center"
          w="100%"
          h="100%"
          bg="blue.200"
          py={10}
          fontWeight="700"
          borderRadius="6px"
          boxShadow="0 4px 30px rgb(0 0 0 / 10%)"
          border="1px solid rgba(255, 255, 255, 0.3)"
        >
          {item}
        </Box>
      ))}
    </SimpleGrid>
  )
}
