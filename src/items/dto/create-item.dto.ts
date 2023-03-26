import { IsNotEmpty } from "class-validator";
import { IsNumber, Min } from "class-validator/types/decorator/decorators";

export class CreateItemDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    price:number;
    
    stok:number;

    descriptions:string
}
