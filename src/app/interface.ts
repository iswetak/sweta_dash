export interface TableDTO {
    ID:string;
    name:string;
    date_registred:string;
    opt_in:string;
    channel_type:string;
}

// export interface LogListingDTO{
//     time: string;
//     user: string;
//     description: string;
//     type: number;
// }

export interface TableInfo {
    count: number;
    totalCount: number;
}