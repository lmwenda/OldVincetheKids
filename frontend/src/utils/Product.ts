import axios from "axios";
import { BASE_URL } from "./exportedUtils";

export class Product{
    /*
    interface ProductTypes{
        _id: number;
        title: string;
        description: string;
        image: string;
        price: number;
        countInStock: number;
    }
    */

    constructor(
        private _id?: number, private title?: string, private description?: string, private image?: string, private price?: number,
        private countInStock?: number
    ){}

    public createProduct(): any{
        axios.post(`${BASE_URL}/product/create`, {
            title: this.title,
            description: this.description,
            image: this.image,
            price: this.price,
            countInStock: this.countInStock
        })
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    public updateProduct(): any{
        axios.put(`${BASE_URL}/product/update/${this._id}`, {
            title: this.title,
            description: this.description,
            image: this.image,
            price: this.price,
            countInStock: this.countInStock
        })
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    // public getProduct(): any{
    //     axios.get(`${BASE_URL}/product/item/${this._id}`)
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err));
    // }
       
    // public getProducts(): any{
    //     axios.get(`${BASE_URL}/product/products`)
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err));
    // }

    public deleteProduct(): any{
        axios.delete(`${BASE_URL}/product/delete/${this._id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }
}