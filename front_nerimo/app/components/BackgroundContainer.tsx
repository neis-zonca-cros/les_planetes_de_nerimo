import { ImageBackground, StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "../hooks/themeContext";
import { ThemedStyles } from "../utils/styles";


type BackgroundContainerProps = {
    backgroundImage: any; 
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
  };
  
export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ backgroundImage, style, children }) => {
    const { theme } = useTheme();
    const styleTheme = ThemedStyles(theme);
    if (backgroundImage) {
      return (
        <ImageBackground
          source={backgroundImage}
          style={style}
          resizeMode="contain"
        >
          {children}
        </ImageBackground>
      );
    }
  
    return <View style={style}>{children}</View>;
  };
  
