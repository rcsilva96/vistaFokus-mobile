import { Pressable, StyleSheet, Text } from 'react-native';

export const VistaFokusButton = ( { onPress, title }) => {

    return (
        <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({

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
    })