
import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1'>
        <Text className='uppercase font-extrabold'> pagina um</Text>
      </Box>
   
  );
}
