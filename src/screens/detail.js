import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {Image, Text} from 'react-native-elements';
import axios from 'axios';
export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        'https://secure-forest-87056.herokuapp.com/api/books/' + this.props.id,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbmVtZSIsImlhdCI6MTU5MDU4MDMyNiwiZXhwIjoxNTkwNjY2NzI2fQ.M6UZh9MJf757GEsYRndz-yKoZIIVFKRT8PdPJT-3jyQ',
          },
        },
      )
      .then(response => {
        this.setState({detail: response.data});
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {console.log(Object.keys(this.state.detail).length)}
        {console.log(this.state.detail)}
        {this.state.detail &&
          this.state.detail.map(detail => {
            return (
              <>
                <View style={styles.summary}>
                  <View>
                    <Image
                      source={{uri: detail.imageLinks[0].smallThumbnail}}
                      style={styles.bookImg}
                    />
                  </View>
                  <View style={styles.text}>
                    <Text style={styles.textRow}>
                      <Text style={styles.title}> Kitap Adı: </Text>{' '}
                      <Text> {detail.title}</Text>
                    </Text>
                    <Text style={styles.textRow}>
                      <Text style={styles.title}> Kitap Türü: </Text>{' '}
                      <Text>
                        {' '}
                        {detail.categories.map(category => {
                          return category + ', ';
                        })}{' '}
                      </Text>
                    </Text>
                    <Text style={styles.textRow}>
                      <Text style={styles.title}> Kitap Yazarı: </Text>{' '}
                      <Text>
                        {detail.authors.map(author => {
                          return author + ', ';
                        })}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}> Kitap Özeti: </Text>
                  <Text style={styles.detailText}> {detail.description}</Text>
                </View>
              </>
            );
          })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222b45',
    flex: 1,
  },
  summary: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  bookImg: {
    width: 120,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    marginLeft: 15,
    color: '#fff',
  },
  textRow: {
    width: 250,
    marginBottom: 10,
    color: '#fff',
  },
  detail: {
    marginTop: 15,
    color: '#fff',
  },
  detailText: {
    marginLeft: 15,
    color: '#fff',
  },
});
