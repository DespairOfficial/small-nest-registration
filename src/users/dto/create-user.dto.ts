import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'
export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'Email' })
    @IsString({ message: 'Must be string' })
    @IsEmail({}, { message: 'Email is not correct' })
    readonly email: string
    @ApiProperty({ example: 'jsd*8@lksf$l1_12', description: 'Password' })
    @IsString({ message: 'Must be string' })
    @Length(4, 24, { message: 'Cannot be less than 4 or greater than 24' })
    readonly password: string
}
