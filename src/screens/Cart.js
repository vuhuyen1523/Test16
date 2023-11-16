import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StatusBar } from 'react-native'

export default function Cart({navigation}) {
  return (
    <View style={styles.containerCart}>
     <TouchableOpacity style={styles.headerCart} onPress={()=>navigation.navigate('Home')}>
      <Image source={require('../img/arrow_back.png')} />
     </TouchableOpacity>
     <View style={styles.contentCart}>
      <Text style={{fontWeight:'bold',fontSize:22,marginBottom:20}}>Your Cart 👍🏻</Text>
      <View style={{flexDirection:'column',gap:20}}>
      <View style={styles.ProductsCart}>
        <View style={styles.ProductsItem}>
          <View style={styles.textItem}>
          <Image source={require('../img/detailProducts1.png')}></Image>
           <View style={styles.detailProducts}>
           <Text style={{color:'#B1B1B1'}}>Lauren’s</Text>
            <Text style={{color:'#494949',fontWeight:'600'}}>Orange Juice</Text>
            <Text style={{color: '#F08F5F',fontSize:18,fontWeight:'bold'}}>₹ 149</Text>
           </View>
          </View>
          <View style={styles.quantityProducts}>
            <Image source={require('../img/icon_tru.png')}/>
            <Text > 2 </Text>
            <Image source={require('../img/icon_cong1.png')}></Image>
          </View>
        </View>
      </View>
      <View style={styles.ProductsCart}>
        <View style={styles.ProductsItem}>
          <View style={styles.textItem}>
          <Image source={require('../img/detailProducts2.png')}></Image>
           <View style={styles.detailProducts}>
           <Text style={{color:'#B1B1B1'}}>Baskin’s</Text>
            <Text style={{color:'#494949',fontWeight:'600'}}>Skimmed Milk</Text>
            <Text style={{color: '#F08F5F',fontSize:18,fontWeight:'bold'}}>₹ 129</Text>
           </View>
          </View>
          <View style={styles.quantityProducts}>
            <Image source={require('../img/icon_tru.png')}/>
            <Text > 2 </Text>
            <Image source={require('../img/icon_cong1.png')}></Image>
          </View>
        </View>
      </View>
      <View style={styles.ProductsCart}>
        <View style={styles.ProductsItem}>
          <View style={styles.textItem}>
          <Image source={require('../img/detailProducts1.png')}></Image>
           <View style={styles.detailProducts}>
           <Text style={{color:'#B1B1B1'}}>Marley’s</Text>
            <Text style={{color:'#494949',fontWeight:'600'}}>Aloe Vera Lotion</Text>
            <Text style={{color: '#F08F5F',fontSize:18,fontWeight:'bold'}}>₹ 1249</Text>
           </View>
          </View>
          <View style={styles.quantityProducts}>
            <Image source={require('../img/icon_tru.png')}/>
            <Text > 2 </Text>
            <Image source={require('../img/icon_cong1.png')}></Image>
          </View>
        </View>
      </View>
      </View>
      <View style={styles.detailSP}>
        <Text style={{fontWeight:'600',fontSize:28}}>Total</Text>
        <Text style={{ color: '#F08F5F',fontWeight:'bold',fontSize:20}}>₹ 1,527</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={{textAlign:'center',color:'#fff',fontSize:15,fontWeight:'600'}}>Proceed to checkout</Text>
      </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCart:{
    flex:1,
    backgroundColor:'#fff'
  },
  headerCart:{
    flex:0.18,
    flexDirection:'row',
    alignItems:'center',
    paddingRight:20,
    paddingLeft:20
  },
  contentCart:{
    padding:20,
    flex:0.8
  },
  ProductsItem:{
    backgroundColor:'#F8F8FB',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textItem:{
    flexDirection:'row',
    gap:10
  },
  detailProducts:{
    flexDirection:'column',
    gap:5
  },
  quantityProducts:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:20
  },
  detailSP:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20
  },
  btn:{
    padding:20,
    borderRadius:15,
    backgroundColor:'#F08F5F',
    marginTop:20
  },
})