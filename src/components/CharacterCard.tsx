import React from 'react';
import styled from 'styled-components/native';
import ICharacter from '../models/character';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddingOrRemovingFavorites } from '../redux/favorite';
import { RootState } from '../redux/configueStore';
import { AntDesign } from '@expo/vector-icons';

interface IProps {
    characterInformation: ICharacter;
    onPress: () => void;
}

const CharacterCard = ({ characterInformation, onPress }: IProps) => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state: RootState) => state);

    return (
        <StyledContainer>
            <StyledImage source={{ uri: characterInformation.image }} />
            <StyledInnerContainer>
                <View>
                    <StyledName>{characterInformation.name}</StyledName>
                    <StyledText>{characterInformation.species}</StyledText>
                </View>
                <StyledFavoriteContainer>
                    <Pressable onPress={() => dispatch(handleAddingOrRemovingFavorites(characterInformation.id))}>
                        {favorites.favorites.includes(characterInformation.id) ? (
                            <AntDesign name="star" size={24} color="black" />
                        ) : (
                            <AntDesign name="staro" size={24} color="black" />
                        )}
                    </Pressable>
                </StyledFavoriteContainer>
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

const StyledFavoriteContainer = styled.View`
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 10px;
`;

export default CharacterCard;
