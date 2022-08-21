import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import CharacterCard from '../components/CharacterCard';
import ICharacter from '../models/character';
import charactersService from '../service/characters-service';

const Home = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();
    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    useEffect(() => {
        charactersService.getAllCharacters(currentPage).then(response => {
            setCharacters([...characters, ...response.data.results]);
            setTotalPages(response.data.info.pages);
        });
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage + 1 <= totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <View>
            <FlatList
                style={{ margin: 15 }}
                data={characters}
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
                onEndReached={() => handleNextPage()}
                onEndReachedThreshold={0.1}
            />

            <Modal visible={isShowModal} animationType="slide" transparent={true} onRequestClose={() => setIsShowModal(false)}>
                <Pressable onPressOut={() => setIsShowModal(false)}>
                    <StyledModalContainer>
                        <StyledView>
                            <StyledText>{`Name: ${selectedCharacter?.name}`}</StyledText>
                            <StyledText>{`Species: ${selectedCharacter?.species}`}</StyledText>
                            <StyledText>{`Gender: ${selectedCharacter?.gender}`}</StyledText>
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

export default Home;
