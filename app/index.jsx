import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (

    <View>

      <Text>Página Inicial</Text>
      <Link href={ { pathname: '/components/Pomodoro/pomodoro' } }> Focar </Link>

    </View>

  )
  }