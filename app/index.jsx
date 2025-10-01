import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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

          <Pressable
            key={p.id} 
            style={timerType.id === p.id ? styles.contextButtonActive : null}
            onPress={ () => setTimerType(p) }
          >

            <Text style={styles.contextButtonText}>{p.display}</Text>

          </Pressable>

          ))}

        </View>

        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) }
        </Text>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Iniciar</Text>
        </Pressable>

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

  timer: {

    fontSize: 54,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'

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

  context:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItens: 'center'
  },

  contextButtonActive:{
    backgroundColor: '#144480',
    borderRadius: 8
  },

  contextButtonText:{
    fontSize: 12.5,
    color: '#FFF',
    padding: 8,
  },

})