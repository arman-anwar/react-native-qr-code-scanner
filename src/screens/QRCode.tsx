import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import Header from '../Components/Header';
import { RootState } from '../features/store';
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
