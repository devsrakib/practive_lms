import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated';
import { Side } from './wave';
import {snapPoint, useVector } from 'react-native-redash';
import { HEIGHT, MARGIN_WIDTH, MIN_LEDGE, WIDTH } from '@/configs/constants';
import { Gesture } from 'react-native-gesture-handler';

interface SliderProps {
    index: number;
    setIndex: (index: number) => void;
    prev?: JSX.Element;
    next?: JSX.Element;
    children: JSX.Element;
}

const Slider = ({index, setIndex, prev, next,children}:SliderProps) => {
    const hasPrev = !!prev;
    const hasNext = !!next;
    const zIndex = useSharedValue(0)
    const activeSide = useSharedValue(Side.NONE);
 const   isTransitionLeft = useSharedValue(false);
 const isTransitionRight = useSharedValue(false);
 const left = useVector(MIN_LEDGE, HEIGHT / 2);
 const right = useVector(MIN_LEDGE, HEIGHT / 2);
 const pandGesture = Gesture.Pan().onStart(({x}) =>{
    if(x <= MARGIN_WIDTH && hasPrev){
activeSide.value = Side.LEFT;
zIndex.value = 100;
    }else if(x >= WIDTH - MARGIN_WIDTH && hasNext){
        activeSide.value = Side.RIGHT;
    }else{
        activeSide.value = Side.NONE;
    }
 })
  return (
    <View>
      <Text>slider</Text>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})