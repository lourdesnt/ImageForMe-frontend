import { Image } from './image';

export class User {
    id: any;
    username: string;
    email: string;
    password: string;
    images: Image[];

    constructor(){
        this.username='';
        this.email='';
        this.password='';
        this.images=[];
    }
}
