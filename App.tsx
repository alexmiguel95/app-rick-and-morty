import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import './ReactotronConfig';
import api from './src/api/api';
import store from './src/redux/configueStore';
import Home from './src/screens/Home';
import theme from './src/theme/theme';

export default function App() {
    return (
        <SafeAreaView>
            <ThemeProvider theme={theme}>
                <ApolloProvider client={api}>
                    <Provider store={store}>
                        <Home />
                    </Provider>
                </ApolloProvider>
            </ThemeProvider>
        </SafeAreaView>
    );
}
