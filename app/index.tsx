import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View, Text } from 'react-native';

const MainScreen = () => {
    const { colorScheme } = useColorScheme();
    return (
        <View className="flex flex-1 bg-white dark:bg-black">
            <StatusBar />
            {/* <Redirect href="/(drawer)/(tabs)/clockin" /> */}
            <Text>Redirect to Clock In</Text>
        </View>
    );
};

export default MainScreen;
