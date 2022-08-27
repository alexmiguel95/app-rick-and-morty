import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList, Modal, Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import CharacterCard from '../components/CharacterCard';
import ICharacter from '../models/character';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddingOrRemovingFavorites } from '../redux/favorite';
import { RootState } from '../redux/configueStore';

const Home = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state: RootState) => state);

    const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const INFO_PERSON = gql`
        query {
            characters {
                results {
                    id
                    name
                    gender
                    image
                    species
                }
            }
        }
    `;

    const { loading, data } = useQuery(INFO_PERSON);

    return (
        <View>
            {!loading && (
                <FlatList
                    style={{ margin: 15 }}
                    data={data.characters.results}
                    keyExtractor={item => `character-${item.id}`}
                    renderItem={({ item }) => (
                        <CharacterCard
                            characterInformation={item}
                            onPress={() => {
                                setSelectedCharacter(item);
                                setIsShowModal(true);
                            }}
                        />
                    )}
                />
            )}

            <Modal visible={isShowModal} animationType="slide" transparent={true} onRequestClose={() => setIsShowModal(false)}>
                <Pressable onPressOut={() => setIsShowModal(false)}>
                    <StyledModalContainer>
                        <StyledView>
                            <StyledText>{`Name: ${selectedCharacter?.name}`}</StyledText>
                            <StyledText>{`Species: ${selectedCharacter?.species}`}</StyledText>
                            <StyledText>{`Gender: ${selectedCharacter?.gender}`}</StyledText>
                            <StyledFavoriteContainer>
                                <Pressable onPress={() => dispatch(handleAddingOrRemovingFavorites(selectedCharacter?.id!))}>
                                    {favorites.favorites.includes(selectedCharacter?.id!) ? (
                                        <AntDesign name="star" size={24} color="black" />
                                    ) : (
                                        <AntDesign name="staro" size={24} color="black" />
                                    )}
                                </Pressable>
                            </StyledFavoriteContainer>
                        </StyledView>
                        <StyledImage source={{ uri: selectedCharacter?.image }} />
                    </StyledModalContainer>
                </Pressable>
            </Modal>
        </View>
    );
};

const StyledModalContainer = styled.View`
    width: 100%;
    height: 250px;

    flex-direction: row;
    background-color: white;
`;

const StyledImage = styled.Image`
    width: 160px;
    height: 100%;
    margin-left: auto;

    border-top-right-radius: 10px;
`;

const StyledView = styled.View`
    justify-content: center;
    flex: 1;
    margin-left: 15px;
`;

const StyledText = styled.Text`
    font-size: 20px;
    margin-bottom: 5px;
`;

const StyledFavoriteContainer = styled.View`
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 50px;
`;

export default Home;
