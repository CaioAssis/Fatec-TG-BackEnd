import { ObjectId } from "mongodb"

export interface IUserClient{
    _id: ObjectId
    uid: string     //id firebase
    name: string
    email: string
    cpf: string
}

export interface IUserProvider{
    _id: ObjectId
    uid: string
    name: string
    email: string
    cpf: string
    cnh: string
}