import React, { useEffect, useState } from "react";
import { ImageBackground, View,Image, FlatList,selectedArray, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Components/Styles";


const DisplayScreen=({navigation, route})=>{
    const [selectedArray,setSelectedArray]=useState([])
    useEffect(()=>{
        setSelectedArray(route?.params?.selectedArray)

},([]))
      

    return(
         <View>
        <ImageBackground style={styles.DisplayBackground} source={require('../assets/sunny.png')}>    
        
        

        <FlatList data={selectedArray} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item, index }) => (
            <TouchableOpacity onPress={()=>selectItem(index)}>
            <View style={[styles.List1,{backgroundColor: item.selected ? 'yellow' : '#ffffff'}]}>
                
                 <Image key={index} source={item.image} style={styles.List2} resizeMode="cover" ></Image>
                 <View >
                 
                    <Text style={styles.SongName}>Thunder</Text>
                    <Text style={styles.Singer}>Imagine Dragon</Text>
                
                </View>
                

            </View>
            </TouchableOpacity> )}
    />
    </ImageBackground> 
    </View>
    );
}


export default DisplayScreen;


