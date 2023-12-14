import React from 'react'
import { useRouter } from 'expo-router';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { COLORS } from '../constants/Colors';

// import { Text, View } from '../components/Themed';
//import EditScreenInfo from '../components/EditScreenInfo';
//import Colors from '../constants/Colors';

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = React.useState<string>("");
  const data = [
    { key: "saved", value: "Saved" },
    { key: "random", value: "Random" },
    { key: "test1", value: "Test 1" },
    { key: "test2", value: "Test 2" },
    { key: "test3", value: "Test 3" },
    { key: "test4", value: "Test 4" }
  ]
  return (
    <SafeAreaView style={styles.area}>
            <Text>Home</Text>

            <SelectList setSelected={setSelected} search={false} data={data}  />
            
            <Pressable style={styles.button} onPress={() => {router.push({ pathname: "/test", params: { category: selected}})}}>
                <Text style={styles.text}>Start test!</Text>
            </Pressable>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
      flex: 1,
      backgroundColor: COLORS.darkGrey,
      alignItems: "center",
      justifyContent: "center"
  },
  text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
  },
  button: {
      backgroundColor: COLORS.black,
      color: 'black'
  }
})
