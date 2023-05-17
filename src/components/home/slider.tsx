import { useEffect, useCallback } from 'react'
import {
  motion,
  MotionValue,
  animate,
  useMotionValue,
  isValidMotionProp,
} from 'framer-motion'
// import lerp from 'lerp'
import { easeCubicIn } from 'd3-ease'
import * as React from 'react'
import styled from '@emotion/styled'
import {
  Box,
  BoxProps,
  Center,
  chakra,
  Flex,
  IconButton,
  shouldForwardProp,
} from '@chakra-ui/react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import {StaticImage} from "gatsby-plugin-image";

function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t
}

const CARD_W = 200
const CARD_H = 300
const CARD_GAP = 20

const mod = (a, n) => ((a % n) + n) % n

const pxToIndex = px => px / (CARD_W + CARD_GAP)

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box)

const StyledCarousel = styled(motion.div)`
  position: relative;
  touch-action: none;
  padding-top: 20px;
  overflow: hidden;
  user-select: none;
`

const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
`

const Card = styled(motion.div)`
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CARD_W}px;
  height: ${CARD_H}px;
  border-radius: 10px;
  background-color: lavenderblush;
  user-select: none;
  will-change: transform;

  &:not(:first-child) {
    position: absolute;
  }
`

const ArrowLeft = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateX(-20px);
  width: 30px;
  height: 30px;
  background-color: #f0f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  ::before {
    content: '⬅';
  }
`

const ArrowRight = styled(ArrowLeft)`
  transform: translateX(-50%) translateX(20px) rotate(180deg);
`

const boys = [1, 2, 3, 4, 5]

const cardsWithFakes = [...boys, ...boys, ...boys].map((card, i) => {
  return {
    index: i - boys.length,
    card,
    x: new MotionValue(0),
    y: new MotionValue(0),
  }
})

export const Carousel = () => {
  const currentIndexMotionValue = useMotionValue(0)

  const handleChange = useCallback(currentIndex => {
    const currentIndexLoop = mod(currentIndex, boys.length)
    for (let i = 0; i < cardsWithFakes.length; i++) {
      const { x, y, index } = cardsWithFakes[i]
      // offset is between -array.length and +array.length
      // 0 means current
      const offset = index - currentIndexLoop

      // if card is out of view, it doesn't need to change place
      // keep them in place for perf
      let nextX = offset * (CARD_W + CARD_GAP)
      const centerOutOfViewPx = (window.innerWidth + CARD_W) * 0.5
      if (nextX > centerOutOfViewPx) {
        nextX = centerOutOfViewPx
      } else if (nextX < -centerOutOfViewPx) {
        nextX = -centerOutOfViewPx
      }

      x.set(nextX)
      y.set(lerp(-10, 0, easeCubicIn(Math.min(Math.abs(offset), 1))))
    }
  }, [])

  const handlePan = (e, pointInfo, ended = false) => {
    e.stopPropagation()
    const deltaIndex = pxToIndex(-pointInfo.delta.x)
    const nextDragIndex = currentIndexMotionValue.get() + deltaIndex
    currentIndexMotionValue.set(nextDragIndex)
    handleChange(nextDragIndex)

    if (!ended) return

    const nextIndex = Math.round(
      nextDragIndex - pxToIndex(pointInfo.velocity.x) * 0.5
    )
    const velocity = -pointInfo.velocity.x * 0.01

    animate(currentIndexMotionValue, nextIndex, {
      type: 'spring',
      velocity,
      damping: 20,
      restSpeed: 0.001,
      onUpdate: handleChange,
    })
  }

  const animateDelta = useCallback(
    deltaIndex => {
      const nextIndex = Math.round(currentIndexMotionValue.get() + deltaIndex)
      animate(currentIndexMotionValue, nextIndex, {
        onUpdate: handleChange,
      })
    },
    [currentIndexMotionValue, handleChange]
  )

  // Initial positions (mount only!)
  useEffect(() => {
    handleChange(0)
    // eslint-disable-next-line
  }, [handleChange])

  return (
    <StyledCarousel
      onPan={handlePan}
      onPanEnd={(e, point) => handlePan(e, point, true)}
    >
      <Cards>
        {cardsWithFakes.map(({ card, index, ...style }) => (
          <Card key={index} style={style}>
            {card}
          </Card>
        ))}
        {/*<StaticImage*/}
        {/*    layout="constrained"*/}
        {/*    placeholder="dominantColor"*/}
        {/*    src="../../images/cargo.jpg"*/}
        {/*    alt="איילה אירועים "*/}
        {/*    aspectRatio={16 / 9}*/}
        {/*/>*/}
        {/*<StaticImage*/}
        {/*    layout="constrained"*/}
        {/*    placeholder="dominantColor"*/}
        {/*    src="../../images/cargo.jpg"*/}
        {/*    alt="איילה אירועים "*/}
        {/*    aspectRatio={16 / 9}*/}
        {/*/>*/}
      </Cards>
      <Center gap="20px">
        <IconButton
          onClick={() => animateDelta(-1)}
          aria-label="next"
          icon={<FcNext />}
          size="lg"
          variant="outline"
          borderRadius="50%"
          //   mx={2}
        />
        <IconButton
          onClick={() => animateDelta(1)}
          aria-label="next"
          icon={<FcPrevious />}
          size="lg"
          variant="outline"
          borderRadius="50%"
          //   mx={2}
        />
      </Center>
    </StyledCarousel>
  )
}
