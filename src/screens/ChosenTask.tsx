import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { RootState } from '../features/store';
import { Props } from '../types';

export default function ChosenTask({ route, navigation }: Props) {
    const  chosenTask = route.params;
    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <Text>{chosenTask.task}</Text>
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: '#14141410',
        alignItems: 'center',
        justifyContent: 'center'
    }
})