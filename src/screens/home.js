import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Image, Button, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
var ls = require('react-native-local-storage');

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      token:''
    };
  }
  componentDidMount() {
    ls.get('user').then((data) => {
      this.setState({"token": data.token});
      axios.get('https://secure-forest-87056.herokuapp.com/api/books', {
        headers: {
          Authorization:
            'Bearer '+  data.token,
        },
      })
      .then(response => {
        this.setState({books: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
    });
    console.log(this.state.token);
    
    
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.books.map(book => {
            return (
              <TouchableOpacity
                key={book._id}
                onPress={() => Actions.detail({id: book._id})}
                style={styles.book}>
                <>
                  <Image
                    source={{uri: book.imageLinks[0].smallThumbnail}}
                    style={styles.bookImg}
                  />
                  <Text style={styles.bookName}>{book.title}</Text>
                </>
              </TouchableOpacity>
            );
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#222b45',
  },
  book: {
    marginRight: 15,
    marginTop: 10,
  },
  bookImg: {
    width: 120,
    height: 200,
  },
  bookName: {
    textAlign: 'center',
    width: 120,
    color: '#fff',
  },
});
