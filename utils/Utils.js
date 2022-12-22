import AsyncStorage from '@react-native-async-storage/async-storage';

const saveAsynce = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
      } catch (e) {
        console.log('Error while saving in storage')
      }
}
const readAsync = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        console.log('readAsync', key, value);
        return value !== null ? value : null;
      } catch(e) {
        console.log('Error while reading from storage')
      }
}

const saveObjAsync = async (key, value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            console.log('Error while saving in object storage')
        }
}
const readObjAsync = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch(e) {
        console.log('Error while reading object from storage')
      }
}


export {saveAsynce, saveObjAsync, readAsync, readObjAsync}