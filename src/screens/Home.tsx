import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import ICharacter from '../models/character';
import charactersService from '../service/characters-service';

const Home = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect(() => {
        charactersService.getAllCharacters().then(response => {
            setCharacters(response.data.results);
        });
    }, []);
    
    return (
        <View />
    );
}

export default Home;
