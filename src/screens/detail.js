import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import {Image, Text } from 'react-native-elements'
export default class Detail extends Component {
    constructor(props) {
		super(props);


    }
  
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.summary}>
                    <View>
                        <Image
                            source={{ uri: "https://i.idefix.com/cache/500x400-0/originals/0001870867001-1.jpg" }}
                            style={styles.bookImg}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.textRow} > 
                            <Text style={styles.title}> Kitap Adı: </Text> <Text> Günlerin Sonu</Text>
                        </Text>
                        <Text style={styles.textRow} > 
                            <Text style={styles.title}> Kitap Türü: </Text> <Text> Fantastik, Roman </Text>
                        </Text>
                        <Text style={styles.textRow}> 
                            <Text style={styles.title}> Kitap Yazarı: </Text> <Text> Sylvia Browne, Lindsay Harrison</Text>
                        </Text>
                       
                    </View>
                </View>
                <View style={styles.detail}>
                <Text style={styles.title}> Kitap Özeti: </Text> 
                    <Text style={styles.detailText}>
                    2020 civarında, zatürre benzeri ciddi bir hastalık tüm dünyaya yayılacak, akciğerlere ve bronşlara saldıracak ve bilinen tüm tedavilere direnç gösterecek. Hastalığın neredeyse kendisinden daha kafa karıştırıcı olan gerçek ise, geldiği gibi aniden gideceği, on yıl sonra tekrar atak yapacağı ve sonrasında tamamen ortadan kaybolacağıdır.”

                    Hepimizin aklının bir köşesinde hep şu soru var: Dünyanın sonu ne zaman gelecek ve bu nasıl gerçekleşecek? Amerikalı ünlü medyum Sylvia Browne’un bu kitabı, size bu sorunun cevabına ulaşmada rehberlik edecek.

                    Antik uygarlıkların dünyanın sonuyla ilgili kehanetleri

                    İslamiyet, Hıristiyanlık, Yahudilik ve diğer dinlere göre kıyamet

                    Kıyamet alametleri nelerdir?

                    Hz. İsa tekrar dünyaya gelecek mi?

                    Mehdi ve Deccal kim, şu an dünyadalar mı?

                    Ünlü kâhinlerin dünyanın sonuyla ilgili kehanetleri

                    Kıyamet tarikatları

                    Sylvia Browne’un dünyanın sonuyla ilgili kehanetleri

                    Dünyaya nereden ve nasıl geldik? Öte Taraf nasıl bir yer?
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
     backgroundColor:'#222b45',
     flex:1,
    },
    summary: {
      marginLeft:15,
      marginTop:10,
      flexDirection:"row",
    },
    bookImg:{
      width: 120, 
      height: 200 
    },
    title:{
      fontWeight:"bold",
      color:"#fff"
    },
    text:{
        marginLeft:15,
        color:"#fff"
        
    },
    textRow:{
        width: 250,
        marginBottom:10,
        color:"#fff"
    },
    detail:{
        marginTop:15,
        color:"#fff"
    },
    detailText:{
        marginLeft:15,
        color:"#fff"
    }
  });
  