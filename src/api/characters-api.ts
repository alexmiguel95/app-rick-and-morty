import { AxiosResponse } from 'axios';
import ICharacter from '../models/character';
import IPagination from '../models/pagination';
import api from './api';

const charactersApi = () => {
    const getAllCharacters = (page: number): Promise<AxiosResponse<IPagination<ICharacter>>> => {
        return api.get<IPagination<ICharacter>>(`/character?page=${page}`);
    };

    return {
        getAllCharacters,
    };
};

export default charactersApi();
