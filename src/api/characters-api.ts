import { AxiosResponse } from 'axios';
import ICharacter from '../models/character';
import IPagination from '../models/pagination';
import api from './api';

const charactersApi = () => {
    const getAllCharacters = (): Promise<AxiosResponse<IPagination<ICharacter>>> => {
        return api.get<IPagination<ICharacter>>('/character');
    };

    return {
        getAllCharacters,
    };
};

export default charactersApi();
