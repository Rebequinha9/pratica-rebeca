import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function App() {
  const router = useRouter();
  return (

      <Box className='flex-1 justify-center items-center'>

        <Text className='text-3xl uppercase font-extrabold text-blue-600 mb-6'>
          Meu Perfil
        </Text>

        <Box className='bg-blue-100 rounded-xl p-6 w-96 h-40'>

          <Text className='text-blue-900 text-lg font-bold mb-2'>
            Seu Nome
          </Text>

          <Text className='text-blue-800 text-sm mb-4'>
            Digite seu nome aqui.
          </Text>

          <Text className='text-blue-900 text-lg font-bold mb-2'>
            Seu Telefone
          </Text>

          <Text className='text-blue-800 text-sm'>
            Digite seu telefone aqui.
          </Text>

        </Box>

      </Box>

  );
}