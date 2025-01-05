import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Divider, PaperProvider,Text } from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native-web';

export default function App() {
  return (
   <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text variant="headlineLarge">Headline Large</Text>
          <StatusBar style="auto" />
          </View>
          <Divider/>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
