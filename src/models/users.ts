import { ObjectId } from "mongodb"

export interface IUserClient{
    _id: ObjectId
    name: string
    email: string
    cpf: string
}

export interface IUserProvider{
    _id: ObjectId
    name: string
    email: string
    password: string
    cpf: string
    cnh: string
}