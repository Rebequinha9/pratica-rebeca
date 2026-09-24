import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1 justify-center items-center'>

        <Text className='text-3xl uppercase font-extrabold text-yellow-600 mb-6'>
          Página Um
        </Text>

        <Box className='flex-row'>

          <Box className='bg-yellow-100 rounded-xl p-4 w-40 h-24 mr-3'>
            <Text className='text-yellow-900 text-lg font-bold mb-1'>
              Informação 1
            </Text>
            <Text className='text-yellow-800 text-sm'>
              Principais informações.
            </Text>
          </Box>

          <Box className='bg-yellow-100 rounded-xl p-4 w-40 h-24'>
            <Text className='text-yellow-900 text-lg font-bold mb-1'>
              Informação 2
            </Text>
            <Text className='text-yellow-800 text-sm'>
              Mais informações.
            </Text>
          </Box>

        </Box>

      </Box>

  );
}
