import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>

      

      

      <View style ={styles.container2}>
        <View style ={{
          borderWidth:1,
           width:190,
           height:73,
           marginLeft:100,
           marginTop:20,
           borderStyle:'dashed'
           }}>
            <Text style = {{fontSize:15, color:'blue'}}> name: areen
               </Text>
            <Text style ={{fontSize:15 ,color:'blue'}}> B.D: 12/02/2003
            </Text>
           </View>
        
        
        <View style = {styles.container3}>
          <Text>view 1</Text>
        </View>

        <Text style = {styles.Text2}>
          my first ui
        </Text>

      </View>
      
      

    </View>

  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent:'center' , 
    justifyContent:'center'
  },
  container2:{
    // flex:2,
    // height:180,
    backgroundColor:'white',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:50 ,
    
    marginTop:-450
    // width:330,
    // marginTop:100,
    
    
  

  },
  container3:{
    height:75,
    backgroundColor:'red',
    borderWidth:1,
    marginRight:300,
    marginTop:-74,
    shadowColor:'#000',
    width:90,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:100
  },
 
  Text: {
    fontSize :10, color:'blue', justifyContent : 'center', alignItems:'center'
  },
  Text2 : {
    fontSize : 40, color :'blue', textAlign: 'center', fontWeight: 'bold'
  } 
})
export default App;












