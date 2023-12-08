import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, ScrollView, Pressable, Switch } from 'react-native';
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import {RadioButton} from 'react-native-paper';
import  { DarkMode, myStyle } from './style.js'; 




export default function App() {
  const [weights, setWeights] = useState('');
  const [gender, setGender] = useState('Male');
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState(0);
  const [whatMode,setMode] = useState ('false');


  const styleMode = whatMode ? myStyle : DarkMode;

  const calculateResult = () => {
   
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weights / 10;
    const gramsLeft = grams - burning / hours;
    



    let calculatedResult;
   
    if (gender === 'Male') {
      calculatedResult = gramsLeft / (weights * 0.7);
    } else if (gender === 'Female') {
      calculatedResult = gramsLeft / (weights * 0.6);
    } else {
      console.error('Error');
      alert('Error');
      return;
    }

    
    setResult(calculatedResult.toFixed(2));
  };
  
  const themeMode = () => { 
    setMode((prevMode) => !prevMode);
  };

  return (
    
<SafeAreaView  style= {styleMode.container}>

<View  style= {styleMode.container} >
<View>
<Switch style= {styleMode.switchs} value={whatMode} onValueChange={themeMode}></Switch>
</View>
<View>
<Text style={styleMode.headerz}> Alcometer</Text>
</View>

<Text style={styleMode.texts}>Weight</Text>
<View style={styleMode.formIn}>
<TextInput  value={weights} onChangeText= {setWeights}/>
</View>

<Text style={styleMode.texts}>Bottles</Text>
<NumericInput 
minValue={1}
value={bottles}
onChange={setBottles}
textColor={'white'}
rounded
rightButtonBackgroundColor='lightgreen'
leftButtonBackgroundColor='lightgreen'
/> 
<Text style={styleMode.texts} >Hours</Text>
<NumericInput 
minValue={0}
value={hours}
onChange={setHours} 
textColor={'white'}
rounded
rightButtonBackgroundColor='lightgreen'
leftButtonBackgroundColor='lightgreen'
/>



<RadioButton.Group value={gender} onValueChange={g => setGender(g)}>
<View style={{flexDirection : "row", alingItems: "center",}}>
<RadioButton value='Male'/>
<Text style={styleMode.texts}>Male</Text>
</View>
<View style={{flexDirection : "row", alingItems: "center"}}>
<RadioButton value='Female'/>
<Text style={styleMode.texts}>Female</Text>
</View>
</RadioButton.Group>



<Pressable onPress= {calculateResult}   style={styleMode.button}> 
<Text style={styleMode.buttontextz}>
Calculate
</Text>
</Pressable>


<Text style={styleMode.tulos}>Tulos: {result} </Text>


</View>
</SafeAreaView>
    
  );
}


