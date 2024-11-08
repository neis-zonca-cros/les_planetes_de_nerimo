/* eslint-disable react/prop-types */
import { ImageBackground, StyleProp, View, ViewStyle } from 'react-native';

import { BackgroundImageMap } from './imageHistoire';

type BackgroundContainerProps = {
  backgroundImage: BackgroundImageMap;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  backgroundImage,
  style,
  children,
}) => {
  if (backgroundImage) {
    return (
      <ImageBackground source={backgroundImage} style={style} resizeMode="contain">
        {children}
      </ImageBackground>
    );
  }

  return <View style={style}>{children}</View>;
};
