import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { addQRCode, saveTodo, setTodos } from '../features/todoReducer';
import { useDispatch } from 'react-redux';
import { Props } from '../types';

export default function Scanner({ navigation }: Props) {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [qrcode, setQRCode] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            if (status === 'granted') {
                setHasPermission(true);

            }
        })();
    }, []);

    const handleBarCodeScanned = (scanResult: BarCodeScannerResult) => {
        // console.log(typeof rtn)
        // console.log(typeof data)
        setScanned(true);
        console.log(scanResult.data)
        // alert(scanResult.data);
        setQRCode(scanResult.data);

        // alert(`Bar code with type ${scanResult.type} and data ${scanResult.data} has been scanned!`);
    };


    const handleSaveQR = () => {
        // console.log(qrcode)
        dispatch(addQRCode(qrcode))
        navigation.goBack();
    };


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            {scanned && <Button title={'Save QR Code'} onPress={() => handleSaveQR()} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});