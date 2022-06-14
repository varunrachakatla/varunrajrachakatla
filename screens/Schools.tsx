import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigatorScreenParams, useNavigation } from '@react-navigation/native-stack';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';


import { Ischools } from '../types';

const schoolsapi: String = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';

const Section: React.FC<{
  title: string;
  children: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Schools: React.FC<{}> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [schoolData,setSchool] = useState<Schools>([]);
  const fetchData = (api: string): Promise<Array[]>=>{
    return fetch(api).then(response=> response.json());
  }
  useEffect(()=>{
      async function Wait() {
        // You can await here
        const response = await fetchData(schoolsapi);
        //console.log(response);
        setSchool(response);
        // ...
      }
      Wait();
  },[]);

  return (
      <FlatList 
        data={schoolData}
        ItemSeparatorComponent= {()=><View style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: '#000', marginTop: 5}} />}
        renderItem ={({item})=> {return (<View><TouchableOpacity onPress={()=>navigation.navigate('Schoolinfo', {school_name: item.school_name, finalgrades: item.finalgrades})}><Section title={item.school_name} children={item.location} /></TouchableOpacity></View>)}}
        keyExtractor={(item, index)=> index}
      />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Schools;
