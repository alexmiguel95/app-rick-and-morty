interface IPagination<T> {
    info: IAboutPagination;
    results: T[];
}

interface IAboutPagination {
    pages: number;
    next: string;
    prev: null | string;
}

export default IPagination;