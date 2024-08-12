import {
    responsiveHeight,
    responsiveWidth
  } from "react-native-responsive-dimensions";


export const marginHorizontalSmall = responsiveWidth(0.2);  
export const marginHorizontalMedium = responsiveWidth(0.5);

export const marginVerticalSmall = responsiveHeight(0.2);  
export const marginVerticalMedium = responsiveHeight(0.5);   

export const marginBottomSmall = responsiveHeight(0.2);  
export const marginBottomMedium = responsiveHeight(0.5);  

export const marginSmall = {
  marginHorizontal: marginHorizontalSmall,
  marginVertical: marginVerticalSmall,
  marginBottom: marginBottomSmall,
};

export const marginMedium = {
  marginHorizontal: marginHorizontalMedium,
  marginVertical: marginVerticalMedium,
  marginBottom: marginBottomMedium,
};

