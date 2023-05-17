import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import {Box, Flex, Heading, SimpleGrid} from '@chakra-ui/react'
import { Strip } from '../components/home/strip'
import { EquipmentBoxes } from '../components/home/equipment-boxes'
import { Carousel } from '../components/home/slider'
// import ChakraCarousel from "../components/home/chakra-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="לאל מקור הברכה - יבוא ציוד לאירועים" description="אנו חברת יבוא ושיווק מובילה בתחום של אוהלים, דוכני מזון ושולחנות. אנו מתמחים בהספקת פתרונות מודולריים לאירועים, תערוכות, מסיבות ואירועים." />
      <Flex pos="relative" justifyContent="center" alignItems="center" mb={10}>
        <StaticImage
          layout="constrained"
          placeholder="dominantColor"
          src="../images/cargo.jpg"
          alt="לאל מקור הברכה "
          aspectRatio={16 / 9}
        />
        <Box
          pos="absolute"
          w="100%"
          textAlign="center"
          bg="#293e3eb3"
          py={[2, 2, 8]}
          bottom={0}
        >
          <Box
            as="h1"
            fontSize={['1.5rem', '3rem', '3rem']}
            fontWeight="700"
            color="white"
          >
            לאל מקור הברכה
          </Box>
            <Box   fontWeight="700"
                   color="white"
                   fontSize={['1rem', '2rem', '2rem']}
            >
                יבוא ציוד לאירועים
            </Box>
        </Box>
      </Flex>
      <Strip />
      <Box mb={10}>
          אנו חברת יבוא ושיווק מובילה בתחום של אוהלים, דוכני מזון ושולחנות. אנו מתמחים בהספקת פתרונות מודולריים לאירועים, תערוכות, מסיבות ואירועים. האוהלים שלנו מיוצרים באיכות גבוהה ועמידים במיוחד,אשר כוללים תכונות של אבטחת איכות ושימור חום וקור. בנוסף, אנו מציעים דוכני מזון ניידים איכותיים. כמו כן, אנו מייבאים שלחנות איכותיים המעניקים מראה אלגנטי ואסטטי לכל אירוע, ואנו מתחייבים לספק ללקוחותינו שירות איכותי ומותאם אישית. נשמח לעזור לכם להפוך כל אירוע לחוויה מושלמת ומרהיבה."
      </Box>
      <Heading textAlign="center" mb={10}>
        מבחר ענק של ציוד
      </Heading>
      <EquipmentBoxes />

        <Heading textAlign="center" my={10}>
            מחירון אוהלים
        </Heading>
        <Box maxW='200px' m='auto' textAlign='center' mb="30px">


            <SimpleGrid columns={2} spacing={2}>
                <Box>6X3</Box>
                <Box>₪2,200</Box>
                <Box>8X3</Box>
                <Box>₪2,500</Box>
                <Box>6X4</Box>
                <Box>₪2,500</Box>
                <Box>8X4</Box>
                <Box>₪2,700</Box>
                <Box>10X4</Box>
                <Box>₪3,300</Box>
                <Box>12X4</Box>
                <Box>₪3,700</Box>
                <Box>8X5</Box>
                <Box>₪3,400</Box>
                <Box>10X5</Box>
                <Box>₪3,800</Box>
                <Box>12X5</Box>
                <Box>₪4,400</Box>
                <Box>10X6</Box>
                <Box>₪5,900</Box>
                <Box>14X6</Box>
                <Box>₪6,900</Box>
            </SimpleGrid>
        </Box>


<Box>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
            direction: 'ltr',
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
        <SwiperSlide>
            <StaticImage
                layout="constrained"
                placeholder="dominantColor"
                src="../images/1.jpg"
                alt="איילה אירועים "
                aspectRatio={16 / 9}
            />
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage
                layout="constrained"
                placeholder="dominantColor"
                src="../images/3.jpg"
                alt="איילה אירועים "
                aspectRatio={16 / 9}
            />
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage
                layout="constrained"
                placeholder="dominantColor"
                src="../images/5.jpg"
                alt="איילה אירועים "
                aspectRatio={16 / 9}
            />
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage
                layout="constrained"
                placeholder="dominantColor"
                src="../images/8.jpg"
                alt="איילה אירועים "
                aspectRatio={16 / 9}
            />
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage
                layout="constrained"
                placeholder="dominantColor"
                src="../images/17.jpg"
                alt="איילה אירועים "
                aspectRatio={16 / 9}
            />
        </SwiperSlide>
        <SwiperSlide>
            <StaticImage
                layout="constrained"
                placeholder="dominantColor"
                src="../images/22.jpg"
                alt="איילה אירועים "
                aspectRatio={16 / 9}
            />
        </SwiperSlide>
    </Swiper>
</Box>

        <Heading textAlign="center" my={10}>
            צור קשר
        </Heading>

        <Box textAlign='center'>
            <Box>053-2481519</Box>
            <Box>054-5510135</Box>
            <Box>054-3008898</Box>
        </Box>
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
