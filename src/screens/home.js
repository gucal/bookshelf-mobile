import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, TouchableHighlight, TouchableOpacity, Alert} from 'react-native';
import {Image, Button, Icon} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

export default class home extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[]
    }
  }
  componentDidMount(){
    axios.get('https://secure-forest-87056.herokuapp.com/api/books', { 'headers': { 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZXJ0aXMiLCJpYXQiOjE1ODkzODIyMTgsImV4cCI6MTU4OTM4NTgxOH0.rv5-Lo4M5v4BFrd7PuVWMv9qehVaPz9clPkN2jsNZ8Y" } })
    .then( (response) =>  {
      this.setState({books: response.data})
    }).catch(function (error) {
        console.log(error)

   });
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        {this.state.books.map((book) => {
          return(
            <TouchableOpacity key={book._id} onPress={() => Actions.detail({id:book._id})} style={styles.book}>
            <>
              <Image
                source={{ uri: book.imageLinks[0].smallThumbnail}}
                style={styles.bookImg}
              />
              <Text style={styles.bookName}>{book.title}</Text>
            </>
          
          </TouchableOpacity>
          )
        })}
         
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
    backgroundColor: "#222b45"
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
    width:120,
    color: '#fff'
  }
});
