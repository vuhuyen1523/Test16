import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
export default function Home({navigation}) {
  return (
    <View style={styles.containerHome}>
      <View style={styles.headerHome}>
        <View style={styles.lableHome}>     
        <Text style={{fontWeight:'bold',fontSize:20,paddingBottom:5}}>Hello 👋🏻 </Text>
          <Text>Christie Doe</Text>
        </View>
        <Image source={require('../img/avatar.png')} style={styles.imageHome}></Image>
      </View>
      <ScrollView style={styles.contentHome}>
      <View >
        <Text style={{fontSize:20}}>
        Your Insights
        </Text>
        <View style={styles.products}> 
       <View style={{flexDirection:'row',gap:10,paddingTop:2,justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.produts_Item} onPress={()=>navigation.navigate('Scanf')}>
        <View style={styles.imageItem}>
         <Image source={require('../img/scanf.png')}/>
         </View>
          <Text style={styles.titleItem}>Scan new</Text>
          <Text style={styles.detailItem}>Scanned 483</Text>
        </TouchableOpacity>
      
        <View style={styles.produts_Item}>
        <View style={[styles.imageItem,styles.imageIconSucess]}>
         <Image source={require('../img/waring.png')}/>
         </View>
          <Text style={styles.titleItem}>Success</Text>
          <Text style={styles.detailItem}>Checkouts 8</Text>
        </View>
       </View>
        <View style={{flexDirection:'row',gap:10,paddingTop:10,justifyContent:'space-between'}}>
        <View style={styles.produts_Item}>
        <View style={[styles.imageItem,styles.imageIconWaring]}>
         <Image source={require('../img/setion.png')}/>
         </View>
          <Text style={styles.titleItem}>Counterfeits</Text>
          <Text style={styles.detailItem}>Counterfeited 32</Text>
        </View>
        <View style={styles.produts_Item}>
        <View style={[styles.imageItem,styles.imageIconDiretory]}>
         <Image source={require('../img/Group159.png')}/>
         </View>
          <Text style={styles.titleItem}>Directory</Text>
          <Text style={styles.detailItem}>History 26</Text>
        </View>
        </View>
        </View>
        <View style={styles.ExploreMore}>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:20,paddingBottom:20}}>
          <Text style={{fontSize:20,fontWeight:'600'}}>Explore More</Text>
         <TouchableOpacity>
         <Image source={require('../img/icon_arrow.png')}/>
         </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
           <TouchableOpacity style={styles.imageExplore} >
           <Image source={require('../img/products1.png')}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageExplore}>
           <Image source={require('../img/products2.png')}/>
           </TouchableOpacity>
           <TouchableOpacity style={styles.imageExplore}>
           <Image source={require('../img/products.jpg')  } style={{width:120,height:125,borderRadius:20}} />
           </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHome:{
    flex:1
  },
  headerHome:{
    flex:0.1,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  lableHome:{
    flexDirection:'column',
   
  },
  imageHome:{
    borderRadius:15,
  },
  contentHome:{
    flex:0.9,
    paddingRight:18,
    paddingLeft:18
    // padding:20,
    // marginTop:20
  },

  produts_Item:{
    width:'48%',
    flexDirection:'column',
    alignItems:'center',
    gap:10,
    backgroundColor:'#F8F8FB',
    padding:35,
    borderRadius:10,
    marginTop:10
  },
  imageItem:{
    height:55,
    width:55
  },
  imageIconWaring:{
    backgroundColor:"#F6E3DB",
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'center',
   alignItems:'center'
  },
  imageIconSucess:{
    backgroundColor:"#D8F3F1",
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'center',
   alignItems:'center'
  },
  imageIconDiretory:{
    backgroundColor:"#D8F3F1",
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'center',
   alignItems:'center'
  },
  titleItem:{
    fontSize:17,
    fontWeight:'bold'
  },
  detailItem:{
    color:'#B7B7C1'
  },
  imageExplore:{
  marginRight:10,
  marginLeft:10
  },
  ExploreMore:{
    marginTop:20
  },
})