import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native/types_generated/index'



const CreateScreen = ({data,setdata}) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(second)

  const handlerAddItem = () => {
  //function to add item in stock
    const newItem = {
      id: data.length + 1,
      name: itemName,
      stock: stock,
      unit: "kg"
    };

    setdata([...data, newItem]);
    setItemName('');
    setStock('');
    setisEdit(false);
  };

  const deleteItemHandler = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setdata(updatedData);
  }

  const editItemHandler = (item) => {
    setisEdit(true);
    setItemName(item.name);
    setStock(item.stock.toString());
    seteditItemId(item.id);

  const updateItemHandler = () => {
    const updatedData = data.map((item) => {
      if (item.id === editItemId) {
        return { ...item, name: itemName, stock: stock };
      }
      return item;
    });
    setdata(updatedData);
    setisEdit(false);
    setItemName('');
    setStock('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item Name"
        style={styles.input}
        value={itemName}
        onChangeText={(itemName) => setItemName(itemName)}
      />
      <TextInput
        placeholder="Stock"
        style={styles.input}
        value={stock}
        onChangeText={(stock) => setStock(stock)}
      />
      <Pressable style={styles.button} onPress={() => isEdit ? updateItemHandler() : handlerAddItem()}>
        <Text style={styles.buttonText}>{isEdit ? `Edit Item In Stock` : `Add Item In Stock`}</Text>
      </Pressable>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.headingText}> All Items In Stock</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? '#ffcccc' : '#D7F6BF' }]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
              <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />

      </View>
    </View>

  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 7,
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },

})