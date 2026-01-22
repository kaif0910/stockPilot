import { Pressable, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DashBoard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>All Items</Text>
        </Pressable>
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Low Stock</Text>
        </Pressable>
        <Pressable style={styles.button} >
            <Text style={styles.buttonText}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
}; 

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        padding: "4%",
        backgroundColor: '#ffffff',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:"#333"
    },
    buttonContainer:{
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
    },
    button:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.8,
        borderColor: 'green',
        borderRadius: 50,
    },
    buttonText:{
        color: 'green',
        fontSize: 14,
    }
});