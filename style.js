import { StyleSheet } from "react-native";







const myStyle = StyleSheet.create({

container: {
alignItems: 'center',
justifyContent: 'center',
backgroundColor:  'lightblue',
flex: '1'
},

formIn: {
    borderWidth: '2%',
    bordercolor: 'black',
    backgroundColor: 'white',
    height: '5%',
    width: 100
    
    
    

    

},
headerz : { 
fontSize: 60,
color: 'white',



},
texts : {
    fontSize: 30,
    
    

},
button : {
    marginTop: '10%',
    borderRadius: '4',
    width: '50%',
    height: '10%', 
    backgroundColor: 'blue',
    borderRadius: '30',
    justifyContent: 'center',
    marginBottom: '10%'
    

},

buttontextz : {
    fontSize: 30,
    color: 'white',

},
numIn: {
    
},
tulos : {
    marginTop: '20%',
    backgroundColor: 'grey',
    height: 50,
    width: 200,
    color: 'white',
    fontSize: 40,
    
    
},
});

const DarkMode = StyleSheet.create({

container : {   
alignItems: 'center',
justifyContent: 'center',
backgroundColor:  'darkblue',
flex: '1'
},

formIn: {
    borderWidth: '2%',
    bordercolor: 'black',
    backgroundColor: 'grey',
    height: '5%',
    width: 100
    
    
    

    

},
headerz : { 
fontSize: 60,
color: 'grey',



},
texts : {
    fontSize: 30,
    color: 'grey'
    
    

},
button : {
    marginTop: '10%',
   
    width: '50%',
    height: '10%', 
    backgroundColor: 'lightblue',
    borderRadius: '50',
    justifyContent: 'center',
    marginBottom: '10%'
    

},

buttontextz : {
    fontSize: 30,
    color: 'grey',

},
numIn: {
    textColor: '#ffffff'
    
},
tulos : {
    marginTop: '20%',
    backgroundColor: 'grey',
    height: 50,
    width: 200,
    color: 'white',
    fontSize: 40,
    
    
},

    
});
export {myStyle,DarkMode};