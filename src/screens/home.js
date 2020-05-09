import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Image, Button, Icon} from 'react-native-elements'

export default class home extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
       
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.idefix.com/cache/500x400-0/originals/0001870867001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Günlerin Sonu</Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001870924001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Mekanik </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001870942001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Michael Jordan</Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001870779001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName} >Konstantiniyye Oteli </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001870840001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Bul Beni </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001869654001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Akıllandım Artık Şimdi Daha Deliyim</Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001869125001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Kozmos: Yeni Dünyalar </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001870778001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName} >Akira 1.Cilt</Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001846586001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Nickel Çocukları </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001791778001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>Mutluluk </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001865675001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName}>İyi ki Yoksun </Text>
        </View>
        <View style={styles.book}>
          <Image
            source={{ uri: "https://i.dr.com.tr/cache/500x400-0/originals/0001864882001-1.jpg" }}
            style={styles.bookImg}
          />
          <Text style={styles.bookName} >Fil Saati </Text>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
    flexWrap: "wrap",
  },
  book: {
    marginRight:15,
    marginTop:10
  },
  bookImg:{
    width: 120, 
    height: 200 
  },
  bookName:{
    textAlign:"center",
    width:120
  }
});
