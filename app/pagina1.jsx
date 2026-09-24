import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1 justify-center items-center'>

        <Text className='text-3xl uppercase font-extrabold text-pink-600 mb-6'>
          Página Um
        </Text>

        <Box className='bg-pink-100 rounded-xl p-4 w-64 h-24 mb-4'>
          <Text className='text-pink-900 text-lg font-bold mb-1'>
            Informação 1
          </Text>
          <Text className='text-pink-800 text-sm'>
            Principais informações da página.
          </Text>
        </Box>

        <Box className='bg-pink-100 rounded-xl p-4 w-64 h-24 mb-4'>
          <Text className='text-pink-900 text-lg font-bold mb-1'>
            Informação 2
          </Text>
          <Text className='text-pink-800 text-sm'>
            Mais informações importantes.
          </Text>
        </Box>

        <Box className='bg-pink-100 rounded-xl p-4 w-64 h-24'>
          <Text className='text-pink-900 text-lg font-bold mb-1'>
            Informação 3
          </Text>
          <Text className='text-pink-800 text-sm'>
            Deslize para visualizar mais.
          </Text>
        </Box>

      </Box>

  );
}