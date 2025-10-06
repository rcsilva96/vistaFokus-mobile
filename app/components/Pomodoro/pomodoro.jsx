import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import VistaFokusButton from '../VistaFokusButton';
import ActionButton from '../ActionButton';
import Timer from '../Timer';
import { IconPlay, IconPause } from '../Icons';

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('../../../assets/images/lucia/luciaPomodoro.png'),
    display: 'Foco',
  },

  {
    id: 'shortBreak',
    initialValue: 5 * 60,
    image: require('../../../assets/images/lucia/LuciaPausaCurta.png'),
    display: 'Pausa curta',
  },

  {
    id: 'longBreak',
    initialValue: 15 * 60,
    image: require('../../../assets/images/lucia/LuciaPausaLonga.png'),
    display: 'Pausa longa',
  }
]

export default function Pomodoro() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const timerRef = useRef(null);

  const clear = () => {

    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }

  }

  const toggleTimerType = (newTimerType) => {

    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();

  }

  const toggleTimer = () => {
    
    if (timerRef.current) {
      clear();
      return
    } 

    setTimerRunning(true);

    const id = setInterval( () => {
      setSeconds(oldState => {

        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }

        return oldState -1;

      })
    }, 1000)

    timerRef.current = id;
  }

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
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />

          ))}

        </View>

        <Timer totalSeconds={seconds} />

        <VistaFokusButton
          title={timerRunning ? 'Pausar' : 'Iniciar'}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
          />

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
    backgroundColor: '#1A1237',
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
    alignItems: 'center'
  },
})