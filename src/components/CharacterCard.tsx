import React from 'react';
import styled from 'styled-components/native';
import ICharacter from '../models/character';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';

interface IProps {
    characterInformation: ICharacter;
    onPress: () => void;
}

const CharacterCard = ({ characterInformation, onPress }: IProps) => {
    return (
        <StyledContainer>
            <StyledImage source={{ uri: characterInformation.image }} />
            <StyledInnerContainer>
                <StyledName>{characterInformation.name}</StyledName>
                <StyledText>{characterInformation.species}</StyledText>
            </StyledInnerContainer>
            <View>
                <Feather name="eye" size={24} style={{ marginTop: 'auto' }} onPress={() => onPress()} />
            </View>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    width: 100%;
    height: 150px;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.secondary};
    margin: ${RFPercentage(2)}px 0;
    padding: 15px;
    border-radius: 10px;
`;

const StyledImage = styled.Image`
    width: 160px;
    height: 100%;
    margin-right: 15px;
`;

const StyledInnerContainer = styled.View`
    width: 120px;
`;

const StyledName = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
`;

const StyledText = styled.Text`
    font-size: 15px;
`;

export default CharacterCard;
