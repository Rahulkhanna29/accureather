import { tSExternalModuleReference } from '@babel/types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



function Screenfirst({ navigation }) {
    const [name, setName] = useState('')
    const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      const [text, setText] = useState('');
    

    console.log(data);

  useEffect(() => {
    fetch("https://weatherdbi.herokuapp.com/data/weather/MOhali")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const navigateToScreen=()=>{

        navigation.navigate('Second',{'value':data});
    
      }
    


    return (
      <View style={styles.MainContainer}>
  
        <Text style={styles.text}> Enter your Name</Text>
<TextInput
style={{borderRadius:3, borderColor:'black',width:250, height:50,marginBottom:10, 
borderWidth:1}}
value={data}
onChangeText={(text)=>{setName(text)}}
/>
        <Button onPress={navigateToScreen} title="Save" />
        
        <Text>{data.region}</Text>
      </View>
    );
  }

  export default Screenfirst;
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
   
    text: {
      textAlign: 'center',
      margin: 12,
      fontSize: 22,
      fontWeight: "100",
    },
   
  });

