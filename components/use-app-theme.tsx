import * as React from 'react';
import { MD3LightTheme, PaperProvider, useTheme } from 'react-native-paper';
import App from './src/App';

const theme = {
    ...MD3LightTheme,

    // Specify a custom property
    custom: 'property',

    // Specify a custom property in nested object
    colors: {
        ...MD3LightTheme.colors,
        brandPrimary: '#fefefe',
        brandSecondary: 'red',
    },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    );
}
