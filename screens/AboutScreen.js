import { View, Text, StyleSheet, Button } from 'react-native'

export default function AboutScreen({navigation}) {
    return (
        <View style={estilos.container}>
            <Text>Tela Sobre</Text>
            <View style={estilos.botao}>
                <Button
                    title='Ir para Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginVertical: '20'
    }
})