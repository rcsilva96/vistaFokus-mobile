import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image 
        source = {require('./assets/img/luciaPomodoro.png')}
        style = {{ width : 300,  height : 300 }}
      />

      <View style={styles.actions}>

        <Text style={styles.timer}>25:00</Text>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Iniciar</Text>
        </Pressable>

      </View>

      <View style ={styles.footer}>

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
  }

})