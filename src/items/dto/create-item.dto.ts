import { Document } from "mongoose";

export class CreateItemDto extends Document {
    readonly id?: string;
    readonly name: string;
    readonly description: string;
    readonly quantity: number;
}