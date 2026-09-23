
import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';

export default function App() {
  return (

    
      <View style={styles.container}>
        <Text className='uppercase font-extrabold'> pagina dois</Text>
      </View>
   
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