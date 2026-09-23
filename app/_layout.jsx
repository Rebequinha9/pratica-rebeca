
import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (

    <GluestackUIProvider mode="dark">
        <SafeAreaView className='flex-1 bg-white'>

      <Tabs initialRouteName='pagina1' screenOptions={{headerShown: false}}>
        <Tabs.Screen name='pagina1' options={{
          title : "home" , tabBarIcon: (color,size)=>(
            <Ionicons name="home" size={24} color="black" />
          )}}/>
       <Tabs.Screen name='pagina2' options={{
         title : "home" , tabBarIcon: (color,size)=>(
           <Ionicons name="heart-outline" size={24} color="black" />
          )}}/>
       <Tabs.Screen name='pagina3' options={{
         title : "perfil" , tabBarIcon: (color,size)=>(
           <Ionicons name="person-outline" size={24} color="black" />
          )}}/>
      
      <Tabs.Screen name='index' options={{href : null}} />
      </Tabs>
          </SafeAreaView>
    </GluestackUIProvider>

  );
}
