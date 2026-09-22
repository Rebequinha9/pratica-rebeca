
import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import { Link } from 'expo-router';

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text className='uppercase font-extrabold'> Primeira home</Text>
        <Divider className='my-3 w-60'/>
        <Link href="/pagina1" asChild>
        <Button className="bg-fuchsia-300">
          <ButtonText className='color-white font-bold'>Primeira pagina</ButtonText>
        </Button>
        </Link>
        <Divider className='my-3 w-40'/>
        <Button className="bg-indigo-300">
          <ButtonText className='color-white font-bold'>Segunda pagina</ButtonText>
        </Button>
         <Divider className='my-3 w-40'/>
        <Button className="bg-slate-300">
          <ButtonText className='color-white font-bold'> Terceira pagina</ButtonText>
        </Button>

      </View>
    </GluestackUIProvider>

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