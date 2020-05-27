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

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://secure-forest-87056.herokuapp.com/api/books', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbmVtZSIsImlhdCI6MTU5MDU4MDMyNiwiZXhwIjoxNTkwNjY2NzI2fQ.M6UZh9MJf757GEsYRndz-yKoZIIVFKRT8PdPJT-3jyQ',
        },
      })
      .then(response => {
        this.setState({books: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
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
