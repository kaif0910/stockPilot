import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CreateScreen from '../screens/createScreen';
import AllItems from '../screens/AllItems';



const HomeScreen = () => {
    const [view, setView] = useState(0);
    const [data, setdata] = useState([ //array of objects raw data
    {id: 1, name: "wheat", stock: 5 , unit: "kg"},
    {id: 2, name: "rice", stock: 2, unit: "kg"},
    {id: 3, name: "Basmati rice", stock: 25 , unit: "kg"},
    {id: 4, name: "Pulse", stock: 1, unit: "kg"},
    {id: 5, name: "Corn", stock: 30, unit: "kg"},  
])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DashBoard</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, view === 0 ? {backgroundColor: 'green'} : {}]} onPress={() => setView(0)} >
                    <Text style={[styles.buttonText, view === 0 ? {color: 'white'} : {}]}>All Items</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 1 ? {backgroundColor: 'green'} : {}]} onPress={() => setView(1)} >
                    <Text style={[styles.buttonText, view === 1 ? {color: 'white'} : {}]    }>Low Stock</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 2 ? {backgroundColor: 'green'} : {}]} onPress={() => setView(2)} >
                    <Text style={[styles.buttonText, view === 2 ? {color: 'white'} : {}]}>Create</Text>
                </Pressable>
            </View>
            {view === 0 && <AllItems data={data} />}
            {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
            {view === 2 && <CreateScreen data={data} setdata={setdata} />}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: "4%",
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#333"
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    },
    button: {
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderWidth: 0.8,
        borderColor: 'green',
        borderRadius: 50,
    },
    buttonText: {
        color: 'green',
        fontSize: 14,
    }
});