import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function Scanf({ navigation }) {
  return (
    <ImageBackground source={require('../img/background.png')} style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity style={styles.nextHome} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../img/arow_left.png')} />
        </TouchableOpacity>
        <View style={styles.cameraScanf}>
          <View style={styles.borderScanf}>
            <Image source={require('../img/Vector_Right.png')} />
            <Image source={require('../img/Vector_Left.png')} />
          </View>
          <ImageBackground source={require('../img/vertor_end.png') } style={{height:'70%',flexDirection:'column',justifyContent:'flex-end'}}>
          <View style={styles.borderScanf}>
            <Image source={require('../img/Vector_3.png')} />
            <Image source={require('../img/Vector_4.png')} />
          </View>
          </ImageBackground>

        </View>
        <View style={styles.ViewProduts}>
          <Image source={require('../img/productsPrange.png')}/>
          <View style={styles.textProducts}>
            <Text style={{color:'#C2C2C2'}}>
            Lauren’s
            </Text>
            <Text style={{fontSize:16,color: '#494949',fontWeight:'600'}}>
            Orange Juice
            </Text>
          </View>
          <TouchableOpacity style={styles.imageProducts}>
            <Image source={require('../img/icon_cong.png')}/>
          </TouchableOpacity>

          
        </View>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  nextHome: {
    marginTop: 20,
    marginBottom:10,
    // flex:0.3,
    // padding:20,
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraScanf: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  borderScanf: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  ViewProduts:{
    backgroundColor:'#fff',
    borderRadius:15,
    flex:0.1,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:20
  },
  imageProducts:{
    backgroundColor:'#5A6CF3',
    height:55,
    width:55,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
  },
})