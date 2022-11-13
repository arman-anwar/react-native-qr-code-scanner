import { setStatusBarBackgroundColor } from "expo-status-bar";
import { FC } from "react";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from "react-native";

interface Props { label?: string, navigation?: any }

const stylesdefault = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    paragraph: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        margin: 24
    },
    wrapperHorizontal: {
        height: 54,
        justifyContent: "center",
        color: "black",
        marginBottom: 12
    },
    itemStyleHorizontal: {
        marginRight: 10,
        height: 50,
        padding: 8,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 25,
        textAlign: "center",
        justifyContent: "center"
    },
    itemSelectedStyleHorizontal: {
        borderWidth: 2,
        borderColor: "#DAA520"
    },
    platformContainer: {
        marginTop: 8,
        borderTopWidth: 1
    },
    platformContainerTitle: {
        marginTop: 8
    },
    title: {
        fontWeight: "bold",
        marginVertical: 4
    }
});



const Button: FC<Props> = ({ label }) => {
    return <>

        <Text style={stylesdefault.platformContainerTitle}>
            iOS only properties
        </Text>
        <Text style={stylesdefault.platformContainerTitle}>
            {label}
        </Text>

        <Text>Common platform properties</Text>
    </>

}

const Footer: FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.footer}>

            <Icon name="home" size={30} color="#900" />

            {/* <Button label='test' /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        zIndex: 5,
        borderTopWidth: 1,
        borderTopColor: '#14141410'
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    }
})


export default Footer;