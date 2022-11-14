import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from "@react-native-material/core";
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';
import { Props } from '../types';
import { addQRCode } from '../features/qrcodeReducer';
import { styles } from './style';

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
        setScanned(true);
        console.log(scanResult.data)
        setQRCode(scanResult.data);
    };


    const handleSaveQR = () => {
        // console.log(qrcode)
        dispatch(addQRCode(qrcode))
        navigation.goBack();
    };


    const showQRCoe = (): string => {
        // console.log(qrcode)
        let result = qrcode;
        if (qrcode.length > 20) {
            result = qrcode.slice(0, 20)
        }
        return result
    };


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            <View style={styles.barcodeContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
            <View style={styles.container}>
                {scanned && <>
                    <Text> Scanned: {showQRCoe()}</Text>
                    <Button variant='outlined' contentContainerStyle={styles.button} titleStyle={styles.buttonText} title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
                    <Button variant='outlined' contentContainerStyle={styles.button} titleStyle={styles.buttonText} title={'Save QR Code'} onPress={() => handleSaveQR()} />
                </>}
            </View>
        </>
    );
}
