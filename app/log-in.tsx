import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from "@/constants/images"; // Asegúrate de tener tu imagen correctamente importada

const LogIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  // Verifica si ya hay sesión guardada
  useEffect(() => {
    const checkSession = async () => {
      const session = await AsyncStorage.getItem('userSession');
      if (session) {
        router.replace('./explore');
      }
    };
    checkSession();
  }, []);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    // Simulación de autenticación
    if (username === '1' && password === '1') {
      await AsyncStorage.setItem('userSession', JSON.stringify({ username }));
      router.replace('./explore');
    } else {
      Alert.alert("Autenticación fallida", "Usuario o contraseña incorrectos.");
    }
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName="flex-grow">
        <Image
          source={images.onboarding}
          className="w-full h-3/6"
          resizeMode="contain"
        />

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome to SixNova
          </Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Iniciar Sesión
          </Text>
        </View>

        <View className='px-10 mt-8'>
          <TextInput
            placeholder="Usuario"
            className="border border-gray-300 rounded-xl p-4 text-base text-black mb-4"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />

          <View className="relative">
            <TextInput
              ref={passwordRef}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
              className="border border-gray-300 rounded-xl p-4 text-base text-black pr-12"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              className="absolute right-4 top-4"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Feather
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className='px-10 mt-6'>
          <TouchableOpacity className='bg-black-300 py-4 rounded-xl' onPress={handleLogin}>
            <Text className='text-white text-center text-base font-semibold'>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
