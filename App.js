import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}><TextInput style={styles.TextInput} placeholder="Insert your goal"/><Button title="Add Goal"/></View>
     <View style={styles.goalsContainer}><Text>List of goals</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom: 24
    
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex:4
  }
});
