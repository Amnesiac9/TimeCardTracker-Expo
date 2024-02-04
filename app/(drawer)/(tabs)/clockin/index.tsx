import { useColorScheme } from 'nativewind';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import EditScreenInfo from '~/components/edit-screen-info';

const Page = () => {
    return (
        <View className={styles.container}>
            <View className={styles.titleArea}>
                <Text className={styles.title}>Clock In</Text>
                <View className={styles.separator} />
            </View>
            <View className={styles.buttonArea}>
                <Button mode="contained" onPress={() => {}}>
                    Add Time
                </Button>
                <View className={styles.separator} />
                <Button mode="contained" onPress={() => {}}>
                    Clock In
                </Button>
                <View className={styles.separator} />
                <Button mode="contained" onPress={() => {}}>
                    View Shifts
                </Button>
                <View className={styles.blankSeperator} />
                {/* <Text onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
                    {`The color scheme is ${colorScheme}`}
                </Text> */}
                <EditScreenInfo path="app/(tabs)/clockin/index.tsx" />
            </View>
        </View>
    );
};

export default Page;

const styles = {
    container: `flex-1 b`, // Align items to the top and add padding g-white dark:bg-black
    buttonArea: `items-center flex-1 justify-center`,
    center: `justify-center`, // Center the content
    separator: `text-center h-[1px] my-7 w-4/5 bg-gray-200`,
    blankSeperator: `h-5`, // Add a small amount of space
    title: `text-center text-4xl mt-5 pt-5`, // Increase text size
    titleArea: `flex-1 items-center`,
    space: `my-12`,
};
