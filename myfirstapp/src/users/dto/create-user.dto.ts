import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MinLength } from "class-validator";


export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString()
    @MinLength(4)
    username: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @Max(100)
    age: number;
}