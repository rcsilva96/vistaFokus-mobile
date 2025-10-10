import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import VistaFoKusButton from "./components/VistaFokusButton";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Otimize sua {'\n'} produtividade, {'\n'}focando no que {'\n'} importa.
      </Text>

      <View style={styles.luciaContainer}>
        <Image 
          source={require('../assets/images/lucia/luciaPomodoro.png')}
          style={styles.lucia}
          resizeMode="contain"
        />
        <View style={styles.buttonWrapper}>
          <VistaFoKusButton 
          
            title="        Vamos lá!        "
            onPress={() => router.push('/components/Pomodoro/pomodoro')} />
        </View>
      </View>

      <Text style={styles.footerText}>TechVista, 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#1A1237',
    paddingVertical: 60,
  },
  logo: {
    width: width * 0.7,
    height: height * 0.1,
    marginBottom: 10,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 28,
    marginBottom: 30,
  },
  luciaContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  lucia: {
    width: width * 0.65,
    height: height * 0.35,
    marginBottom: -35, // 👈 faz a imagem “encostar” no botão
  },
  buttonWrapper: {
    zIndex: 1,
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 14,
    position: 'absolute',
    bottom: 20,
  },
});
