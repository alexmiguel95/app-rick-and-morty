import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import './ReactotronConfig';
import Home from './src/screens/Home';
import theme from './src/theme/theme';

export default function App() {
    return (
        <SafeAreaView>
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    <Home />
                </View>
            </ThemeProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
