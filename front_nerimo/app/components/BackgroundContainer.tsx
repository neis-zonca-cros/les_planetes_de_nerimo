import { ImageBackground, StyleProp, View, ViewStyle, StyleSheet } from "react-native";
import { ThemedStyles } from "../utils/styles";
import { useTheme } from "../hooks/themeContext";


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
          resizeMode="cover"
        >
          {children}
        </ImageBackground>
      );
    }
  
    return <View style={style}>{children}</View>;
  };
  
