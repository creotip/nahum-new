import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Strip } from '../components/home/strip'
import { EquipmentBoxes } from '../components/home/equipment-boxes'
import { Carousel } from '../components/home/slider'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="homepage" />
      <Flex pos="relative" justifyContent="center" alignItems="center" mb={10}>
        <StaticImage
          layout="constrained"
          placeholder="dominantColor"
          src="../images/cargo.jpg"
          alt="איילה אירועים "
          aspectRatio={16 / 9}
        />
        <Box
          pos="absolute"
          w="100%"
          textAlign="center"
          bg="#293e3eb3"
          py={[2, 8, 8]}
          bottom={0}
        >
          <Box
            as="h1"
            fontSize={['1.5rem', '3rem', '3rem']}
            fontWeight="700"
            color="white"
          >
            יבוא ציוד לאירועים
          </Box>
        </Box>
      </Flex>
      <Strip />
      <Box mb={10}>
        לורם איפסום הוא טקסט פשוט ו"חי" (כלומר שממש כתוב בטקסט ואינו תמונה),
        ומשמש כתחליף לטקסט באתר. כל מטרתו של הטקסט הזה הוא לשמש כדוגמא לאיך טקסט
        חי- כזה שמורכב מאותיות ומילים באורכים רנדומלים (כמו שטקסט אמיתי נראה),
        יראה באתר שלנו. הטקסט הזה פשוט כתוב בצורה "טבעית" שתופסת מקום וצורה של
        טקסט אמיתי, בשונה מטקסט שמועתק ומודבק בהכפלה ונראה ככה-
      </Box>
      <Heading textAlign="center" mb={10}>
        מבחר ענק של ציוד
      </Heading>
      <EquipmentBoxes />

      <Carousel />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
