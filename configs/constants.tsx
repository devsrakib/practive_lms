import { IsIPAD } from "@/themes/app.constant";
import { Dimensions, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
//@ts-ignore
import One from '@/assets/images/onboarding/1.png';
//@ts-ignore
import Two from '@/assets/images/onboarding/2.png';
//@ts-ignore
import Three from '@/assets/images/onboarding/3.png';
export const onBoardingSlides: onBoardingSlidersType[] = [
    {
        color: '#40E0D0',
        title: 'Explore',
        image: (
            <Image source={One}
             style={{width: IsIPAD ? verticalScale(285) : verticalScale(320), 
                 height: IsIPAD ?  verticalScale(345) : verticalScale(330)}} />
        ),
        secondTitle: 'Our Community',
        subTitle: 'Find the perfect course to enhance you career prospects'
    },
    {
        color: '#40E0D0',
        title: 'Explore',
        image: (
            <Image source={Two}
             style={{width: IsIPAD ? scale(285) : scale(320), 
                 height: IsIPAD ?  verticalScale(345) : verticalScale(330)}} />
        ),
        secondTitle: 'Our Community',
        subTitle: 'Find the perfect course to enhance you career prospects'
    },
    {
        color: '#40E0D0',
        title: 'Explore',
        image: (
            <Image source={Three}
             style={{width: IsIPAD ? scale(285) : scale(320), 
                 height: IsIPAD ?  verticalScale(345) : verticalScale(330)}} />
        ),
        secondTitle: 'Our Community',
        subTitle: 'Find the perfect course to enhance you career prospects'
    },
]




// onboarding variables

export enum Side {
    LEFT,
    RIGHT,
    NONE
}

export const MIN_LEDGE = 25;

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const PREV = WIDTH;
export const NEXT = 0;
export const LEFT_SNAP_POINT = [MIN_LEDGE, PREV];
export const RIGHT_SNAP_POINT = [NEXT, WIDTH - MARGIN_WIDTH];