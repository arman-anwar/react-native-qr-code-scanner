import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import Header from '../Components/Header';
import { Props, QRCode } from '../types';
import { useSelector } from 'react-redux'
import { RootState } from '../features/store';
import { Button, Text } from "@react-native-material/core";
import { ListItem } from "@react-native-material/core";
import { styles } from './style';
import { useQuery } from 'react-query';
import apiClient from '../util/apiClient';

export default function Home({ navigation }: Props) {
    const qrCodes = useSelector((state: RootState) => state.qrCode.qrCodeList)


    const renderItem: ListRenderItem<QRCode> = ({ item }) => {
        return (
            <ListItem title={item.code} onPress={() => handleChooseTask(item)} />
        )
    }

    function getAllData() {
        try {
            getAllTutorials();
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllData();
    }, [])
    const { isLoading: isLoadingTutorials, refetch: getAllTutorials } = useQuery(
        "query-tutorials",
        async () => {
            let a  = await apiClient.get("qrcodes");
            console.log('ddddddddddd >>> ' , a.data)
            return a;
        },
        {
            enabled: false,
            onSuccess: (res) => {
                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: res.headers,
                    data: res.data,
                };
                console.log('data >> ', res.data)

            },
            onError: (err) => {
                console.log('qqqqqq', err)
            },
        }
    );

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
                    data={qrCodes}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id + ''}
                />
            </View>
        </>
    )
}