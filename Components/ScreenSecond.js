import React, { Component, useEffect, useState } from "react"; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet, Text, View, Button,Image ,TouchableOpacity,Modal,Pressable} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';


function ScreenSecond({ navigation , route}) {
    // let data=route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [text, setText] = useState('');
    console.log('kkk ',data);
  
    useEffect(() => {
      API();
  },[]);
   const API=()=>{
       fetch('https://api.openweathermap.org/data/2.5/weather?lat=30.7046&lon=76.7179&appid=6890862a72fc7aabfe2222f2f2b1d4b0'
  , {
           method: 'GET',
           headers: {
            "content-type": "application-json",
           },
       })
           .then((response) => response.json())
           .then((responseJson) => {
               console.log(responseJson, "updateeee imageee")
               setData(responseJson)
               // navigation.goBack()
           })
           .catch((error) => {
               console.log(error, "erooooooooooooooooo")
           });
   }

   const [modalVisible, setModalVisible] = useState(true);
   const [selectedArray,setSelectedArray]=useState([])

   const next=()=>{
   let selectedArray = [];
   text.map((item)=>{
       if(item.selected === true){
           selectedArray.push(item)
       }
   })
navigation.navigate(data,{'selectedArray':selectedArray})
}


  
    return (
      <View style={styles.MainContainer}>
  <View>
      <Text style={{fontWeight:'bold',fontSize:35, alignSelf:'center', marginTop:hp('3%'),color:'white'}}>Accu Weather</Text>
      <View style={{flexDirection:'row', marginTop:hp('10%'),elevation:10,borderWidth:2,borderColor:'white',borderRadius:20,height:hp(20),alignSelf:'center'}}>
        {/* <Text> {data.region}</Text> */}
        <Image style={{margin:wp(2),width:wp(20),height:hp(8),alignSelf:'center'}} source={{uri:data?.currentConditions.iconURL}}></Image>
    <Text style={{fontSize:40,color:'white',textAlign:'center',marginTop:hp(6),}}>{data?.currentConditions.temp.c}°C</Text>
    <View style={{flexDirection:'column',margin:10,marginLeft:wp(10),marginTop:hp(6),}}>
        <Text style={{color:'white'}}>Precipitation:</Text>
        <Text style={{color:'white'}}>Humidity:</Text>
        <Text style={{color:'white'}}>Wind:</Text>
        </View>
        <View style={{flexDirection:'column',margin:10,marginTop:hp(6),}}>
        <Text style={{color:'white'}}>{data?.currentConditions.precip}</Text>
        <Text style={{color:'white'}}>{data?.currentConditions.humidity}</Text>
        <Text style={{color:'white'}}>{data?.currentConditions.wind.km}</Text>
        </View>
</View>
<View style={{marginTop:hp(10)}}>
<Text style={{fontSize:20,fontWeight:'bold',marginTop:hp(2),color:'white',alignSelf:'center'}}>{data?.region}</Text>
<Text style={{fontSize:20,color:'white',marginTop:hp(1),alignSelf:'center'}}>{data?.currentConditions.dayhour}</Text>
<Text style={{fontSize:20,color:'white',marginTop:hp(1),alignSelf:'center'}}>{data?.currentConditions.comment}</Text>


</View>
<View style={{width:wp('100%')}}>
<FlatList 
horizontal={true}
data={data?.next_days}
keyExtractor={(item, index) => index.toString()}
renderItem={({ item, index }) => (
    <View style={{marginTop:hp(13),margin:wp(5)}}>
  <TouchableOpacity onPress={() => setModalVisible(true)}>
  <Text style={{fontSize:20,color:'white',marginBottom:hp(2),marginRight:wp(1)}}>{item.day}</Text>
  <Image style={{height:50,width:50,marginBottom:hp(2)}}source={{uri:item.iconURL}}/>
  <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:20,color:'white'}}>{item?.max_temp.c}°C</Text>
  <Text style={{fontSize:15,color:'white',marginLeft:wp(1)}}>{item?.max_temp.f}°F</Text>
  </View>
  </TouchableOpacity>
 
  </View> 

)}
/>
</View>
<View style={styles.centeredView}>
       <Modal
       invisible={true}
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
         
           setModalVisible(!modalVisible);
         }}
       >
         <View style={styles.centeredView}>
           <View style={styles.modalView}>
             {/* <Text style={styles.modalText}>Hello World!</Text> */}
             <View style={{marginTop:hp(13),margin:wp(5)}}>
    {/* <TouchableOpacity onPress={() => setModalVisible(true)}> */}
    <Text style={{fontSize:20,color:'red',marginTop:hp(1),alignSelf:'center'}}>{data?.currentConditions.comment}</Text>
  <Text style={{fontSize:20,color:'white'}}>{data?.next_days[1].day}</Text>
  {/* <Image style={{height:50,width:50,marginBottom:hp(2)}}source={{uri:item.iconURL}}/>
  <View style={{flexDirection:'column'}}>
  <Text style={{fontSize:20,color:'white'}}>{item?.max_temp.c}°C</Text>
  <Text style={{fontSize:15,color:'white',marginLeft:wp(1)}}>{item?.max_temp.f}°C</Text> */}
  {/* </View> */}
  {/* </TouchableOpacity> */}
 
  </View> 
             <Pressable
               style={[styles.button, styles.buttonClose]}
               onPress={() => setModalVisible(!modalVisible)}
             >
               <Text style={styles.textStyle}>Hide Modal</Text>
             </Pressable>
           </View>
         </View>
       </Modal>
       </View>

      </View>
      </View>
    );
  }

  export default ScreenSecond;

  
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      backgroundColor:'black'
    },
   
    text: {
      textAlign: 'center',
      margin: 12,
      fontSize: 22,
      fontWeight: "100",
    }, centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "black",
      borderRadius: 20,
      padding: 100,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      borderColor:'white',
      borderWidth:2
      // backgroundColor: 'rgba(0,0,0,0.5)'
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "red",
    
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
   
  });