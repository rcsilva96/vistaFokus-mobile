import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { VistaFokusButton } from './components/vistaFokusButton';
import { ActionButton } from './components/ActionButton';
import { Timer } from './components/Timer';

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('./assets/img/luciaPomodoro.png'),
    display: 'Foco',
  },

  {
    id: 'shortBreak',
    initialValue: 5,
    image: require('./assets/img/LuciaPausaCurta.png'),
    display: 'Pausa curta',
  },

  {
    id: 'longBreak',
    initialValue: 15,
    image: require('./assets/img/LuciaPausaLonga.png'),
    display: 'Pausa longa',
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View
      style={styles.container}
    >
      <Image
        source={timerType.image}
        style={{ width: 300, height: 300 }}
      />

      <View style={styles.actions}>

        <View style={styles.context}>

          {pomodoro.map(p => (

            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />

          ))}

        </View>

        <Timer totalSeconds={timerType.initialValue} />

        <VistaFokusButton />

      </View>

      <View style={styles.footer}>

        <Text style={styles.footerText}>TechVista, 2025</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    //gap: 40 - não se aplica
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  text: {
    color: '#FFF'
  },
  btn: {
    backgroundColor: '#B872FF',
    padding: 8,
    borderRadius: 32,
  },
  btnText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 'bold'
  },
  footer: {
    width: '80%',
    paddingVertical: 32
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 14
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItens: 'center'
  },
})