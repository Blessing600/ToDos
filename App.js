import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text,TouchableWithoutFeedback,View ,Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from'./components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App(){
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy coffee', key: '2'},
    {text: 'buy coffee', key: '3'}

  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const  submitHandler = (text) =>{
    if (text.length > 3){
      setTodos((prevTodos) =>{
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else{
      Alert.alert('OOPS!', 'Todos must be over chars long',[
        {text: 'understood', onPress:()=> console.log('alert closed')}
      ]);
    }
    
  }
  return(
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
        <AddTodo  submitHandler={submitHandler}/>
          <View style={styles.list}>
              <FlatList 
                data={todos}
                renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              
                )}
              />         
          </View>
        </View>
      </View>
   </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  content:{
     padding:40,
     flex: 1,
  },
  list:{
     marginTop:20,
     flex: 1,
  },
})

// export default function App() {
//   const [people, setPeople] = useState([
//     {name: 'Blessing', id: '1'},
//     {name: 'Juliets',   id: '2'},
//     {name: 'Uchenna',  id: '3'},
//     {name: 'Joshua',   id: '4'},
//     {name: 'Kingsley', id: '5'},
//     {name: 'Chioma',   id: '6'},
//     {name: 'Emma',     id: '7'}
//   ]);

//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) =>{
//       return prevPeople.filter(person => person.id != id)
//     });
//   }

  // return (
  //   <View style={styles.container}>
     
      {/* <FlatList 
       numColumns={2}
       keyExtractor={( item ) => item.id}
        data={people}
        renderItem={({item}) =>(
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
        )}
   
      /> */}
      {/* <ScrollView>
          {people.map((item) =>{
            return(
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })}
      </ScrollView>  */}
    {/* </View>
  );
} */}

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#fff',
//     paddingTop:40,
//     paddingHorizontal:20
//   },
//   item: {
//     marginTop:24,
//     padding:30,
//     backgroundColor:'pink',
//     fontSize:24,
//     marginHorizontal:10,
//     marginTop:24,
//   }
// })
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// export default function App() {
//   const [name, setName] = useState('juliet');
//   const [person, setPerson] =useState({name:'Blessing', age:30});
//   const[names, setNames] = useState('Hi');
//   const[ages, setAges] = useState('20');
//   const [prononus, setPrononus] =useState({x:'Her' ,i: 'her'});
  
//   const clickHandler = () =>{
//     setName('Blessing');
//     setPerson({name:'Uchenna', age:40,});
//     setPrononus({x:'His', i: 'his'})
//   }
//   return (
//     <View style={styles.container}>
//       <Text> My name is {name}</Text>
//       <Text> {prononus.x} name is {person.name} and {prononus.i} age is {person.age}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title='update state' onPress={clickHandler} />
//       </View>
//       <Text>Enter name:</Text>
//       <TextInput 
//       multiline
//       style={styles.input} 
//       placeholder='e.g. John Doe'
//       onChangeText={(val) => setNames(val)}/>

//       <Text>Enter age:</Text>
//       <TextInput 
//       keyboardType='numeric'
//       style={styles.input} 
//       placeholder='e.g. 20...'
//       onChangeText={(val) => setAges(val)}/>
//       <Text>name: {names}, age: {ages}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     buttonContainer: {
//       marginTop: 20
//     },
//     input: {
//       borderWidth:1,
//       borderColor:'#777',
//       padding:8,
//       margin:10,
//       width:200,
//       marginTop: 20
     
//     }
// });
