

export interface pageDataModel<T>{

    totalCount: number;

    currentPage: number;

    pageCount: number;

    items: T[];

}

export interface postFileModel{
    userID:string;
    files:any;
    fileType:string;
}