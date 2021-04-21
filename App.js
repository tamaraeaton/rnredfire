import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from './src/store/actions';


const App = () => {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getArticles())
  },[dispatch])

  return (
    <View>
      <Header 
        leftComponent={{icon:'menu', color:'#fff'}}
        centerComponent={{text:'MY TITLE', style: { color: '#fff'}}}
        rightcomponent={{icon: 'home', color: '#fff'}}
      />
    </View>
  );
}

export default App;
