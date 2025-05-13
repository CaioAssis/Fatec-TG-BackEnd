import { ObjectId } from "mongodb"

export interface Vehicle {
    _id: ObjectId
    userId: string
    fixedPrice: number
    variablePrice: number
    type: string
    size: string
}
