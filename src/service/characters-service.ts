import { AxiosError, AxiosResponse } from 'axios';
import HttpStatus from '../models/enums/http-status';
import ICharacter from '../models/character';
import IPagination from '../models/pagination';
import charactersApi from '../api/characters-api';

const charactersService = () => {
    const getAllCharacters = async (): Promise<AxiosResponse<IPagination<ICharacter>>> => {
        try {
            const result: AxiosResponse<IPagination<ICharacter>> = await charactersApi.getAllCharacters();
            if (result.status === HttpStatus.OK && result.data != null) {
                return Promise.resolve(result);
            }

            return Promise.reject({ status: result.status } as AxiosResponse);
        } catch (error) {
            const { response } = error as AxiosError;

            console.error(response);
            return Promise.reject(response);
        }
    };

    return {
        getAllCharacters,
    };
};

export default charactersService();
