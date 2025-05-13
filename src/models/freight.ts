import { ObjectId } from "mongodb"

export interface IAddress{
    lat: number
    lng: number
}

export interface IFreight{
    _id: ObjectId
    userId: string
    userProvId: string
    vehicleId: string
    org: IAddress
    dst: IAddress
    date: Date
    price: number
    crtDate: Date
}
