import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { onBoardingSliders } from '@/configs/constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Slider from '@/components/onboarding/slider';
import Slide from '@/components/onboarding/slide';

const OnboardingScreen = () => {
  const [index, setIndex]  = useState(0);
  const prev = onBoardingSliders[index - 1];
  const next = onBoardingSliders[index + 1];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
<Slider
 key={index} 
 index={index}
  prev={prev && <Slide slide={prev} totalSliders={onBoardingSliders?.length}  />}
   next={next && <Slide slide={next} totalSliders={onBoardingSliders?.length}/>}>

</Slider>
    </GestureHandlerRootView>
  )
}

export default OnboardingScreen