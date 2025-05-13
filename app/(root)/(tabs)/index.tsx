import { Link } from 'expo-router';
import { View, Text } from 'react-native'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className='text-5xl text-dark-200 font-bold'>Welcome!</Text>
      <Link href="/log-in">Login</Link>
      <Link href="/landing">Landing</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>

    </View>


  );
}