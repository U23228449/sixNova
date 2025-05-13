import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Explore = () => {
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro que deseas salir?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Salir",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem('userSession');
            router.replace('./profile');
          },
        }
      ]
    );
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-6">Bienvenido a la pantalla principal</Text>

      <TouchableOpacity
        className="bg-red-500 px-6 py-3 rounded-xl"
        onPress={handleLogout}
      >
        <Text className="text-white font-semibold text-base">Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Explore;
