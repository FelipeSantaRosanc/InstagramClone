import React from "react";
import { TouchableOpacityProps,TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

interface Buttonprops extends TouchableOpacityProps {
  title: String;
}

export const Button = ({ title, ...rest }: Buttonprops) => {
  return <TouchableOpacity 
        {...rest}
        style={styles.button}
        >

    <Text style={styles.buttonText} >
        {title}
    </Text>

  </TouchableOpacity>;
};
