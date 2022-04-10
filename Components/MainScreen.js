import React, {components, useEffect, useState} from "react";
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from "../Components/Styles";

const Mainscreen=({navigation})=>{
    const next=()=>{
        let selectedArray = [];
        image.map((item)=>{
            if(item.selected === true){
                selectedArray.push(item)
            }
        })
    navigation.navigate('DisplayScreen',{'selectedArray':selectedArray})
}

    const [image, setimage] = useState([{image:
        require('../assets/sunny.png'), selected: false},{
            image:  require('../assets/sunny.png'), selected: false},{
                image:  require('../assets/sunny.png'),selected: false },{
                    image: require('../assets/sunny.png'), selected: false},
                        // image: require('./assets/noidea.jpg'), selected: false},{
                        //     image:  require('./assets/IDB.jpg'), selected: false},{
                        //         image:  require('./assets/layer_5.png'),selected: false },{
                        //             image: require('./assets/no-lies.jpg'), selected: false},{
                        //                 image: require('./assets/noidea.jpg'), selected: false},{
                        //                     image: require('./assets/Heat.png'), selected: false},
                            
       ])

       const selectItem=(index)=>{
let array = image;

if(array[index].selected == true){
    array[index].selected = false
setimage([...array])
}
else{array[index].selected = true
    setimage([...array])

}
       }

    return(
        <View style={styles.MainView}>
            <ImageBackground source={require("../assets/musicbackground.jpg")} style={styles.ImageBackground}>
                <View style={styles.SignupView}>
                   <Image source={require("../assets/logo.png")} style={styles.SignupLogoListPage}></Image>
                   <TouchableOpacity onPress={next}>
                   <Image source={require("..assets/arrow_right.png")} style={styles.NextArrow}></Image>    
                   </TouchableOpacity>               
                </View>
                
                    <FlatList data={image} 
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

                        <View style={styles.ButtonView}>

                            <TouchableOpacity style={styles.Button} >
                                <Image source={require("../assets/previous.png")} style={styles.Previous}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Button}>
                                <Image source={require("../assets/play.png")} style={styles.PlayPause}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Button}>
                                <Image source={require("../assets/next.png")} style={styles.Next}></Image>
                            </TouchableOpacity>

     
                        </View>


                
            </ImageBackground>
        </View>
    )
}
export default Mainscreen;