import { IsString, IsInt, Length, IsEmail } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @Length(10, 20)
    readonly name: string;

    @IsString()
    @IsEmail()
    readonly email: string;
}