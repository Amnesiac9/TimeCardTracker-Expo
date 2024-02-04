import { Button, Text, View } from 'react-native';

import EditScreenInfo from '~/components/edit-screen-info';

const Page = () => {
    return (
        <View className={styles.container}>
            <Text className={styles.title}>Clock In</Text>
            <View className={styles.separator} />
            <Button title="Add Time" onPress={() => {}} />
            <View className={styles.separator} />
            <Button title="Clock In" onPress={() => {}} />
            <View className={styles.separator} />

            <EditScreenInfo path="app/(tabs)/clockin/index.tsx" />
        </View>
    );
};

export default Page;

const styles = {
    container: `items-center flex-1 justify-center`,
    separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
    title: `text-xl font-bold`,
};
