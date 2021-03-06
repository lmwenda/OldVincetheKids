// Exported Constants

export const BASE_URL = "http://localhost:5000/api";

// Exported Interfaces

export interface ProductTypes{
    _id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    countInStock: number;
}

// Exported Functions

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function IProduct({_id, title, description, image, price, countInStock}: ProductTypes){
    return {
        _id, title, description, image, price, countInStock
    }
}   
