import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Props, Task } from '../types';
import { saveTodo, setTodos } from '../features/todoReducer';
import { useSelector } from 'react-redux'
import { RootState } from '../features/store';

export default function Home({ navigation }: Props) {
    const tasks = useSelector((state: RootState) => state.todo.todoList)
    const [task, setTask] = useState<Task>({ id: 0, task: '' });

    const dispatch = useDispatch();

    useEffect(() => {
        const taskB: Task = { id: 2, task: 'brush your teeth' }
        const taskA: Task = { id: 1, task: 'Open your eyes' }

        const tasks = [taskA, taskB];
        // setToDoList(tasks)
        dispatch(setTodos(tasks));

    }, [])

    const renderItem: ListRenderItem<Task> = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.task}
                onPress={() => handleChooseTask(item)}
            >
                <Text>{item.task}</Text>
            </TouchableOpacity>
        )
    }

    const handleSaveTask = () => {
        dispatch(saveTodo(task))
        setTask({ id: 0, task: '' });
    }

    const newTask = (val: string) => {
        const a: Task = { id: tasks.length + 1, task: val };
        setTask(a)
    }

    const handleChooseTask = (item: Task) => {
        navigation.navigate('ChosenTask', item);
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={newTask}
                    value={task.task}
                    placeholder="To do task..."
                />
                <TouchableOpacity
                    style={styles.button}
                    testID="submitButton"
                    onPress={() => handleSaveTask()}
                >
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id + ''}
                />
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
        backgroundColor: '#14141410'
    },
    task: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginTop: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#141414',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
        marginBottom: 30,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900'
    }
})