import { StyleSheet } from "react-native";
import { hp,wp } from "./Metrics";

const styles=StyleSheet.create({

MainView:{
    width:wp(100),
    height:hp(100),
    backgroundColor:"white"
    },

ImageBackground:{
    width:wp(100),
    height:hp(100),    
    },

Logo:{
    alignSelf:'center',
    marginTop:90, 
    marginBottom:50,
    },

LoginView:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "black",
    height: 40,
    margin: 10    ,
    },

UserImage:{
    padding: 10,
    margin: 5,
    height:hp(3),
    width:wp(5),
    resizeMode : 'stretch',
    alignItems: 'center',    
    },

Username:{
    flexDirection: 'row',
    alignItems: 'center',
    fontSize:20,
    height:hp(20),
    marginTop: 5,
    },

PassImage:{
    padding: 10,
    margin: 5,
    height:hp(3),
    width:wp(5),
    resizeMode : 'stretch',
    alignItems: 'center',    
    },
  
Password:{
    flexDirection: 'row',
    alignItems: 'center',
    fontSize:20,
    height:hp(20),
    marginTop:5,
    },

LogIn:{
    width:wp(95),
    height:hp(8),
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'#6a71fc',  
    marginTop:15  
    },

LoginText:{
    justifyContent:'center',
    alignSelf:'center',
    color:'white',
    fontSize:22,
    },

SignUp:{
    width:wp(95),
    height:hp(8),
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'#6a71fc',  
    marginTop:15  
    },

SignupText:{
    justifyContent:'center',
    alignSelf:'center',
    color:'white',
    fontSize:22,
},

//----------------------------------

SignupView:{
    flexDirection:'row',
},

SignupLogo:{
    width:wp(20),
    height:hp(11),
    marginTop:5,
    marginLeft:5,
    marginBottom:80,
},

SignUpText:{
    justifyContent:'center',
    fontSize:40,
    fontWeight:'bold',
    color:'#ffffff',
    marginLeft:50,
    marginTop:15,
},

SignupInput:{
    alignSelf:"center",
    fontSize:20,
    width:wp(95),
    height:hp(8),
    borderColor:"#ffffff",
    borderBottomWidth:1,
    marginTop:5,
    marginBottom:5,
},

SignupButtonStyle:{
    width:wp(95),
    height:hp(8),
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    backgroundColor:'#ab0916',  
    marginTop:50 
},

//------------------------------

SignupLogoListPage:{
    width:wp(20),
    height:hp(11),
    marginTop:5,
    marginLeft:5,
    marginBottom:20,
},

NextArrow:{
    justifyContent:'flex-end',
    alignSelf:'center',
    marginLeft:230,
    marginTop:20,
    

},

MainscreenBackground:{
    alignSelf:"center",
    justifyContent:"center",
    width:wp(100),
    height:hp(100),
    backgroundColor:"#ffffff",
    borderRadius:10,
    opacity:0.7
},

List1:{
    flexDirection: 'row', 
    width:wp(90),
    alignItems: 'center', 
    alignSelf:"center",
    justifyContent:'space-between', 
    
    
},

List2:{
    height:hp(6),
    width:wp(15),
    justifyContent:'space-between', 
    borderRadius: 10,
    margin:4,
    
},

SongName:{
    fontSize: 16, 
    fontWeight: "400", 
    marginRight:230, 
    color: 'white' 

},

Singer:{
    fontSize: 14, 
    fontWeight: "400", 
    justifyContent: 'center', 
    color: 'white'
},

ButtonView:{
    justifyContent:'space-between',
    alignSelf:'center',
    flexDirection:'row',
    width:wp(100),
    height:hp(10),
},

Button:{
    width:wp(16),
    height:hp(10),
    justifyContent:'center',
    alignSelf:'center',
},

PlayPause:{
    width:wp(16),
    height:hp(7.7),
    borderWidth:2,
    justifyContent:'center',
    alignSelf:'center',
},

Previous:{
    width:wp(13),
    height:hp(3.5),
    borderColor:"#ffffff",
    justifyContent:'center',
    alignSelf:'center',
    marginLeft:140,
},

Next:{
    width:wp(13),
    height:hp(3.5),
    borderColor:"#ffffff",
    justifyContent:'center',
    alignSelf:'center',
    marginRight:140,
},

//-----------------------------------------------------

DisplayBackground:{
    width:wp(100),
    height:hp(100),

},

DisplayScreenImage:{
    width:wp(50),
    height:hp(40)
},

//-------------------------------------------------------

carouselview:{
    width:wp(60), 
    height:hp(35), 
    marginTop:30, 
    justifyContent:"center",
    alignItems: 'center',
    alignSelf:"center",  
    padding:20,
},

screenview:{
    backgroundColor:"red",
    height:hp(100)
},

carouselimage:{ 
    width:wp(50), 
    height:hp(30), 
    borderRadius:20
},

carouseltext:{
    marginVertical: 10, 
    fontSize: 20, 
    fontWeight: 'bold', 
    color:"white"
},

dotstyle:{    
    
    width:wp(2),
    height:hp(1),
    borderRadius: 10,
    backgroundColor: 'yellow',

},

inactivedotstyle:{
    backgroundColor: 'white',

}


})
export default styles;