import React from 'react';
import { StyleSheet, Text, View, ScrollView, useColorScheme } from 'react-native'; 
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParams,"Schoolinfo">

const Section: React.FC<{
  title: string;
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

const Schoolinfo: React.FC<Props> = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


return(<View style={styles.mainContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{flex:1},backgroundStyle}>
        <View
          style={{flex:1},{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={route.params.school_name}>
            SAT Score:{route.params.finalgrades}
          </Section>
        </View>
      </ScrollView>


</View>)
	
}

const styles = StyleSheet.create({
	mainContainer :{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
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
})

export default Schoolinfo;