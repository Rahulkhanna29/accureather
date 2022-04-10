import React, { Component, useEffect, useState } from "react"; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StyleSheet, Text, View, Button,Image ,TouchableOpacity,Modal,Pressable} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import CustomTextInput from "./CustomTextInput";
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useLinkProps } from "@react-navigation/native";
import { panGestureHandlerCustomNativeProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";
const DATA = [
    {
     title: 'Rahul',
    },
    {
     title: 'khanna',
    },
    {
     title: 'Mohan',
    },
    {
     title: 'Shivam',
    },
    {
      title: 'Arun',
    },
    {
      title: 'Amit',
    },
    {
     title: 'Kanwal',
    },
    {
     title: 'Kiran',
    },
  ];

const ProductScreen=()=>{

    const [color, setColor]=useState()
    const [key, setKey]=useState(0)
const [value,setValue]=useState('')
const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
   
    const selected=(item,index)=>{
setKey(index)
setValue(item.title)
    }

    return(
        <KeyboardAwareScrollView>
        <View style={styles.mainView}>
       <View style={styles.secondView}>
            <CustomTextInput placeholder='Product title'  value={product}  onChange={(text) => setProduct(text)} />
            <CustomTextInput placeholder='Price'  keyboardType = 'numeric' 
            value={price} onChange={(text) => setPrice(text)}
            />
            <CustomTextInput inputstyle={{height:hp('15%'),}} placeholder='Description' 
             value={description} onChange={(text) => setDescription(text)}
             />
            <CustomTextInput placeholder='Image Link'/>
            <View style={{marginLeft:wp(4), flexDirection:'row',marginBottom:hp(2)}}>
                <Text style={styles.selectedText}>Selected Category:</Text>
     <Text style={styles.textinput}>{value}</Text>
            </View>
            <View>
            <View style={styles.flatlistMainView}>
<FlatList 
horizontal={true}
data={DATA}
showsHorizontalScrollIndicator={false}
renderItem={({ item,index }) => (

    <View style={[styles.flatlistView,{  backgroundColor: key===index?'black' : 'white'}]}>
    <TouchableOpacity onPress={()=> selected(item,index)}>
      <Text style={ [styles.flatlistText,{color: key===index?'white' : 'black'}]}>{item.title}</Text>
     
    </TouchableOpacity>
  </View>

 
)}
/>
 </View>
 <View style={styles.buttonView}>
     <TouchableOpacity style={styles.Touchopacity}>
         <Text style={styles.TouchText}>Add Product</Text>
     </TouchableOpacity>
 </View>
 <View style={{margin:wp(10)}}></View>
        </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
    );
}
export default ProductScreen;

const styles=StyleSheet.create({
mainView:{flex:1,},
secondView:{marginTop:wp(5)},
titleText:{marginLeft:wp(6)},
selectedText:{fontSize:18,fontWeight:'bold',marginTop:hp(2)},
flatlistMainView:{flex:1,marginTop:wp(2)},
flatlistView:{borderColor:'black',borderWidth:2,borderRadius:10,marginHorizontal:wp(2),backgroundColor:'white'},
flatlistText:{fontSize:20,color:'white',margin:wp(2)},
buttonView:{alignSelf:'center',height:hp(25),justifyContent:'flex-end'},
Touchopacity:{borderColor:'black',borderWidth:2,borderRadius:10,height:hp(5),backgroundColor:'black',width:wp(30),justifyContent:'center'},
TouchText:{textAlign:'center',color:'white',fontWeight:'bold'},
  textinput:{borderColor:'black',borderRadius:20,borderWidth:2,width:wp(20),textAlign:'center',marginTop:hp(2),fontSize:20}
});