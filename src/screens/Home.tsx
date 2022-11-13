import React, { useState, useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../Components/Header';
import { Props, QRCode } from '../types';
// import { saveTodo, setTodos } from '../features/todoReducer';
import { useSelector } from 'react-redux'
import { RootState } from '../features/store';
import { Button, Text, TextInput } from "@react-native-material/core";
import { ListItem } from "@react-native-material/core";
import { styles } from './style';

export default function Home({ navigation }: Props) {
    const tasks = useSelector((state: RootState) => state.qrCode.qrCodeList)

    const renderItem: ListRenderItem<QRCode> = ({ item }) => {
        return (
            <ListItem title={item.code} onPress={() => handleChooseTask(item)} />
        )
    }

    const handleChooseTask = (item: QRCode) => {
        console.log('item >> ', item)
        navigation.navigate('QRCode', item);
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
            <Text style={styles.text} >Press Scan to scan QR Code</Text>

                <Button contentContainerStyle={styles.button} titleStyle={styles.buttonText} variant="outlined" title='Scan' onPress={() => navigation.navigate("Scanner")} />
                <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id + ''}
            />
            </View>
        </>
    )
}