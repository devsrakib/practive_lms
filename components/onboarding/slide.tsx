import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg'
import { HEIGHT, WIDTH } from '@/configs/constants'
import { scale, verticalScale } from 'react-native-size-matters'

const Slide = ({ slide, index, setIndex, totalSlides }: { slide: onBoardingSlidersType , index: number, setIndex: (value:number) => void, totalSlides: number }) => {

  console.log(slide);
  
  return (
    <>
     <Svg>
      <Defs>
        <RadialGradient id='gradient' cx={'50%'} cy={'35%'}>
<Stop offset={'0%'} stopColor={slide.color} />
<Stop offset={'100%'} stopColor={slide.color} />
        </RadialGradient>
      </Defs>
      <Rect x={0} y={0} width={WIDTH} height={HEIGHT} fill={'url(#gradient)'} />
     </Svg>
     <View style = {styles.container}>
<View>{slide?.image}</View>
     </View>
    </>
  )
}

export default Slide

const styles = StyleSheet.create({
  container:{
   ...StyleSheet.absoluteFillObject,
   padding: scale(60),
   paddingTop: verticalScale(100),
   alignItems: 'center',
  }
})