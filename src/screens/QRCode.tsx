import React from 'react';
import {  View, Text } from 'react-native';
import { Props } from '../types';
import { styles } from './style';

export default function QRCode({ route, navigation }: Props) {
    const  QRCode = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.text} >
                <Text>{QRCode.code}</Text>
            </View>
        </View>
    )
}
