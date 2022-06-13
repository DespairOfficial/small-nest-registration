import { ApiProperty } from '@nestjs/swagger'
import {
    Model,
    Table,
    Column,
    DataType,
    BelongsToMany,
    HasMany,
} from 'sequelize-typescript'
import { Post } from 'src/posts/posts.model'
import { Role } from '../roles/roles.model'
import { UserRoles } from '../roles/user-roles'
interface UserCreationAttributes {
    email: string
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
    @ApiProperty({ example: 1, description: 'Unique key' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ApiProperty({ example: 'user@mail.com', description: 'Email' })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string

    @ApiProperty({ example: 'jsd*8@lksf$l1_12', description: 'Password' })
    @Column({
        type: DataType.STRING,

        allowNull: false,
    })
    password: string

    @ApiProperty({ example: true, description: 'Is user banned' })
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    banned: boolean

    @ApiProperty({ example: 'Swearing', description: 'Ban reason' })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasMany(() => Post)
    posts: Post[]
}
