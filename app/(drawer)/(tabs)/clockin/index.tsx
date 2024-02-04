import { useColorScheme } from 'nativewind';
import { Button, Text, View } from 'react-native';

import EditScreenInfo from '~/components/edit-screen-info';

const Page = () => {
    const { colorScheme, setColorScheme } = useColorScheme();

    return (
        <View className={styles.container}>
            <View>
                <Text className={styles.title}>Clock In</Text>
                <View className={styles.separator} />
            </View>
            <View className={styles.buttonArea}>
                <Button title="Add Time" onPress={() => {}} />
                <View className={styles.separator} />
                <Button color="red" title="Clock In" onPress={() => {}} />
                <View className={styles.separator} />
                <Button title="View Shifts" onPress={() => {}} />
                <View className={styles.blankSeperator} />
                <Text onPress={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
                    {`The color scheme is ${colorScheme}`}
                </Text>
                <EditScreenInfo path="app/(tabs)/clockin/index.tsx" />
            </View>
        </View>
    );
};

export default Page;

const styles = {
    container: `flex-1 bg-white dark:bg-black`, // Align items to the top and add padding
    buttonArea: `items-center flex-1 justify-center`,
    center: `justify-center`, // Center the content
    separator: `text-center h-[1px] my-7 w-4/5 bg-gray-200`,
    blankSeperator: `h-5`, // Add a small amount of space
    title: `text-center text-4xl mt-5 pt-5`, // Increase text size
    space: `my-12`,
};
