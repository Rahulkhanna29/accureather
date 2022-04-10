// // import React, { useEffect, useState } from 'react';
// // import { FlatList, Text, View , TextInput, StyleSheet, Button, TouchableOpacity, } from 'react-native';



// export default SearchApi = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [text, setText] = useState('');

//   console.log(data);

//   useEffect(() => {
//     fetch("https://weatherdbi.herokuapp.com/data/weather/MOhali")
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const searchedText=()=>{
//     //   console.log("https://jsonplaceholder.typicode.com/comments/"+text)
//     fetch("https://weatherdbi.herokuapp.com/data/weather/MOhali"+text)
//     .then((response) => response.json())
//     .then((json) => console.log(JSON.stringify(json)))
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false));    
//   }

  

//   return (

//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <Text>Loading...</Text> : 
//       ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
//      {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text> */}
//           <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Search Api:</Text>
//           <TextInput 
//           onChangeText={(text)=>setText(text)}
//          value={text} 
//            placeholder='Search' 
//            style={styles.textinput} />
// <View>
//  <TouchableOpacity onPress={()=>searchedText()} style={styles.Button}>
//      <Text style={styles.Button1}>Button</Text>
//  </TouchableOpacity>
// </View>

//            <FlatList
//             data={data}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <Text>{item.id + '. ' + item.name}</Text>
//             )}
//             />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles=StyleSheet.create({
//     textinput:{
//         borderWidth:2,
//             borderRadius: 10,
//             marginBottom:20
//     },
//     Button:{
//         width:90,
//         height:40,
//         backgroundColor:'blue',
//         alignSelf:'center',
//         marginBottom: 20,
//         borderRadius:10
//     },
//     Button1:{
//         alignSelf:'center',
//         color:'white',
//        marginTop:10,
      
//     }
// });

// import { text } from '@fortawesome/fontawesome-svg-core';
// import React, { Component, Fragment, useState, useEffect } from 'react';
// import { FlatList,SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, TextInput } from 'react-native';




// const App = () => {
//     const [city, setCity] = useState("")
//     const [cities, setCities] = useState([])
//     const fetchCities = (text) => {
//         setCity(text)
//         fetch('https://weatherdbi.herokuapp.com/data/weather/MOhali'+text)
//         .then((response) => response.json())
//         .then((json) => {
//           console.log(JSON.stringify(json));
          
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//     useEffect(()=>{
        
//         // console.log("filteredData==> ",city);
//     })
//     return (
//         <View style={{
//             position: "relative", zIndex: 1000, borderWidth: 1, borderColor: "grey", shadowColor: "#000", marginBottom: 10,
//             shadowOffset: {
//                 width: 0,
//                 height: 12,
//             },
//             shadowOpacity: 0.58,
//             shadowRadius: 16.00,

//             elevation: 24,
//         }}>
//             <View>
//                 <Text>
//                     It is the search component
//                 </Text>
//                 <TextInput
//                     placeholder="Search here if you want"
//                     style={{ color: "#00aaff" }}
//                     value={city}
//                     onChangeText={(text) => fetchCities(text)}
//                 />
//             </View>
//         </View>
//     );
// }
// export default App;

// import React, { Component, useEffect, useState } from "react"; 
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
// import 'react-native-gesture-handler';
// import Screenfirst from "./Components/Screenfirst";
// import ScreenSecond from './Components/ScreenSecond';
// import Mainscreen from "./Components/MainScreen";
// import DisplayScreen from './Components/DisplayScreen';


//   const Stack = createStackNavigator();

//   function App() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="First" component={Mainscreen} />
//           <Stack.Screen name="Second" component={DisplayScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }

  
//   export default App;


