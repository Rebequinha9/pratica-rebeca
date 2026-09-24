import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';


export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1 justify-certer items-center'>
        <Text className='uppercase font-extrabold'> meu perfil</Text>
      </Box>

   
  );
}
