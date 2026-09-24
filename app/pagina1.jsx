import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1 justify-center items-center'>

        <Text className='text-3xl uppercase font-extrabold text-pink-600 mb-6'>
          DOCERIA
        </Text>

        <Box className='bg-pink-100 rounded-xl p-5 w-80 h-28 mb-4'>
          <Text className='text-pink-900 text-lg font-bold mb-1'>
            BOLOS
          </Text>
          <Text className='text-pink-800 text-sm'>
            Um pedaço de felicidade em cada mordida! Experimente e apaixone-se pelo nosso bolo!
          </Text>
        </Box>

        <Box className='bg-pink-100 rounded-xl p-5 w-80 h-28 mb-4'>
          <Text className='text-pink-900 text-lg font-bold mb-1'>
            DOCINHOS
          </Text>
          <Text className='text-pink-800 text-sm'>
            Pequenos no tamanho, gigantes no sabor! Experimente nossos docinhos e deixe seu dia mais doce! 💕
          </Text>
        </Box>

        <Box className='bg-pink-100 rounded-xl p-5 w-80 h-28'>
          <Text className='text-pink-900 text-lg font-bold mb-1'>
            BROWNIE
          </Text>
          <Text className='text-pink-800 text-sm'>
            Brownies irresistíveis, macios e cheios de chocolate! Uma mordida e você vai querer mais!
          </Text>
        </Box>

      </Box>

  );
}