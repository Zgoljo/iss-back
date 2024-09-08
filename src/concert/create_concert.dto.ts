import {IsNotEmpty, IsString} from "class-validator";

export class CreateConcertDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    content_id:bigint;

    @IsNotEmpty()
    @IsString()
    description:string;
}
