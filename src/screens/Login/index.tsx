import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import Logo from "../../assets/logo.png";
import { RootStackParamList } from "../../routes";
import { useNavigation } from "@react-navigation/native";

import { AiFillEye } from "react-icons/Ai";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Login = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [isPassword, setIsPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" translucent={false} />

      <Image style={styles.logo} source={Logo} />

      <TextInput
        placeholder="Celular, Username ou email"
        style={styles.input}
      />

      <TextInput
        placeholder="Sua senha"
        secureTextEntry={isPassword}
        style={styles.input}
      />

      <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
        <FontAwesome5 name="eye" size={24} color="black" />
        
      </TouchableOpacity>
      

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: "3%" }}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <TouchableOpacity style={styles.facebookContainer}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>Continue com Jessica</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
