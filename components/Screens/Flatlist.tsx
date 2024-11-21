import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
const Flatlist = async () => {
    const [data, setData] = useState([]);
    const response = await axios('https://dummyjson.com/users');
    setData(response.data);
    // console.log(response.data);
  return (
    <View>
        {data ? <Text>{data}</Text> : <Text>ok</Text>}
    </View>
  );
};

export default Flatlist;
const styles = StyleSheet.create({})