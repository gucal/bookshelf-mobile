import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {Image, Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { action } from 'mobx';
import { Actions } from 'react-native-router-flux';
var ls = require('react-native-local-storage');

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }
  componentDidMount() {
    ls.get('user').then((data) => {
        this.setState({"token": data.token});
        axios.get('https://secure-forest-87056.herokuapp.com/api/books/' + this.props.id, {
          headers: {
            Authorization:
              'Bearer '+  data.token,
          },
        })
        .then(response => {
            this.setState({detail: response.data});
        })
        .catch(function(error) {
          console.log(error);
        });
      });
 
  }
  handleChange = (e) => {
    this.setState({comment: e.value})
  }
  saveComment = () => {
      console.log("save")
    ls.get('user').then((data) => {
        axios.post('https://secure-forest-87056.herokuapp.com/api/books/comments',
        {
            "author_id": data.author_id,
            "text": this.state.comment,
            "book_id": this.props.id
        },
        {
            headers: {
                Authorization:
                'Bearer '+  data.token,
            },
        })
        .then(response => {
            console.log( {
                "author_id": data.author_id,
                "text": this.state.comment,
                "book_id": this.props.id
            },)
            Actions.push("detail",{id: this.props.id});
        })
        .catch(function(error) {
          console.log(error);
        });
      });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
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
                      <Text style={styles.title}> Book Name: </Text>{' '}
                      <Text> {detail.title}</Text>
                    </Text>
                    <Text style={styles.textRow}>
                      <Text style={styles.title}> Book Type: </Text>{' '}
                      <Text>
                        {' '}
                        {detail.categories.map(category => {
                          return category + ', ';
                        })}{' '}
                      </Text>
                    </Text>
                    <Text style={styles.textRow}>
                      <Text style={styles.title}> Book Authors: </Text>{' '}
                      <Text>
                        {detail.authors.map(author => {
                          return author + ', ';
                        })}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}> Book Summary: </Text>
                  <Text style={styles.detailText}> {detail.description}</Text>
                </View>
                <View style={styles.detail}>
                  <Text style={styles.title}> Comments </Text>
                  <Input placeholderTextColor="#fff" placeholder='write a comment'
                  onChangeText={value => this.setState({ comment: value })} />
                  <Button
                  title="SEND COMMENT"
                  icon={{
                    name: "paper-plane",
                    type:'font-awesome',
                    size: 15,
                    color: "white"
                  }}
                  buttonStyle={{marginHorizontal: 10}} onPress={this.saveComment}
                />
                {detail.comments.map(comment => {
                    return(
                        <View style={styles.comments}>
                            <Image style={styles.avatar} source={{uri: 'https://i.ya-webdesign.com/images/png-avatar-4.png'}} />
                            <View style={styles.commentsInfo}>
                                <Text style={styles.commentsName}> {comment.username} </Text>
                                <Text style={styles.commentsText}> { comment.text}</Text>
                            </View>
                        </View>
                    );
                })}
                   
                </View>
              </>
            );
          })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222b45',
    flex: 1,
  },
  comments: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor: 'white',
    flexDirection: 'row',
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
  avatar:{
    height:75,
    width: 75,
    marginRight: 15
  },
  commentsName:{
    width: 300,
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
 },
 commentsText:{
    width: 300,
    flex: 1,
    color: '#fff',
    
 },
 commentsInfo:{
   
    flexDirection: 'column'
 }
});
