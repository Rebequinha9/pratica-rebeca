import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1 justify-center items-center'>

        <Text className='text-3xl uppercase font-extrabold text-yellow-600 mb-6'>
          TEMOS OUTRAS OPÇÕES
        </Text>

        <Box className='flex-row'>

          <Box className='bg-yellow-100 rounded-xl p-4 w-44 h-96 mr-3'>
            <Text className='text-yellow-900 text-lg font-bold mb-3'>
              DOCES
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🧁 Cupcakes
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍓 Docinhos de morango
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🥥 Beijinhos
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍮 Pudim
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍓 Cheesecake
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍪 Cookies
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🥧 Tortas doces
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍩 Donuts
            </Text>

            <Text className='text-yellow-800 text-sm'>
              • 🍯 Alfajores
            </Text>
          </Box>

          <Box className='bg-yellow-100 rounded-xl p-4 w-44 h-96'>
            <Text className='text-yellow-900 text-lg font-bold mb-3'>
              MAIS OPÇÕES
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍫 Trufas
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍓 Morango com chocolate
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🥜 Paçoca
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍋 Torta de limão
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🥕 Bolo de cenoura
            </Text>

            <Text className='text-yellow-800 text-sm mb-2'>
              • 🍫 Bolo de chocolate
            </Text>

            <Text className='text-yellow-800 text-sm'>
              • 🍓 Bolo de morango
            </Text>
          </Box>

        </Box>

      </Box>

  );
}
