import { AxiosRequestConfig } from "axios"
import { Category } from "../../types/productList"

export type CategoryData = {
    categories: Category[]
}

export type AxiosData = {
    data: CategoryData,
    extensions?:any;
}

export type AxiosResponse = { 
    data: AxiosData;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}