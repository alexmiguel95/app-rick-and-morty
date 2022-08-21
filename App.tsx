import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import './ReactotronConfig';
import Home from './src/screens/Home';
import theme from './src/theme/theme';

export default function App() {
    return (
        <SafeAreaView>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </SafeAreaView>
    );
}
