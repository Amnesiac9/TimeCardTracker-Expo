import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet } from 'react-native';

const DrawerLayout = () => (
    <Drawer>
        <Drawer.Screen
            name="(tabs)"
            options={{
                headerTitle: 'Time Tracking',
                drawerLabel: 'Time Tracking',
                drawerIcon: ({ size, color }) => (
                    // <MaterialIcons name="border-bottom" size={size} color={color} />
                    <Ionicons name="time-outline" size={size} color={color} />
                ),
                headerRight: () => (
                    <Link href="/modal" asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <FontAwesome
                                    name="info-circle"
                                    size={25}
                                    color="gray"
                                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                                />
                            )}
                        </Pressable>
                    </Link>
                ),
            }}
        />
        <Drawer.Screen
            name="settings/index"
            options={{
                headerTitle: 'Settings',
                drawerLabel: 'Settings',
                drawerIcon: ({ size, color }) => (
                    <Ionicons name="settings-outline" size={size} color={color} />
                ),
            }}
        />
    </Drawer>
);

const styles = StyleSheet.create({
    headerRight: {
        marginRight: 15,
    },
});

export default DrawerLayout;
