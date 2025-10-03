import { Pressable, StyleSheet, Text } from 'react-native';

const VistaFokusButton = ( { onPress, title, icon }) => {

    return (
        <Pressable style={styles.btn} onPress={onPress}>
            {icon}
            <Text style={styles.btnText}>{title}</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({

        btn: {

            backgroundColor: '#B872FF',
            padding: 8,
            borderRadius: 32,
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'center',

        },

        btnText: {

            textAlign: 'center',
            color: '#021123',
            fontSize: 18,
            fontWeight: 'bold',

        },
    })

    export default VistaFokusButton;