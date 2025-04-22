import { ObjectId } from "mongodb"

export interface Vehicle {
    _id: ObjectId
    fixedPrice: number
    variablePrice: number
    type: string
    size: string
}