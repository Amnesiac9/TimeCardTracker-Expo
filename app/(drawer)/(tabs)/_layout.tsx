import * as React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomBottomBar from '~/components/bottom-navigation-bar';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
    const theme = useTheme();

    return (
        // <CustomBottomBar />
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveBackgroundColor: theme.colors.surface,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.outline,
                },
            }}>
            <Tabs.Screen
                name="clockin/index"
                options={{
                    title: 'Clock In',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
            <Tabs.Screen
                name="timecard/index"
                options={{
                    title: 'Timecard',
                    tabBarIcon: ({ color }) => <TabBarIcon name="clipboard" color={color} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarIcon: {
        marginBottom: -3,
    },
});
