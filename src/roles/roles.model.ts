import { ApiProperty } from '@nestjs/swagger'
import {
    Model,
    Table,
    Column,
    DataType,
    BelongsToMany,
} from 'sequelize-typescript'
import { UserRoles } from './user-roles'
import { User } from 'src/users/users.model'

interface RoleCreationAttribute {
    value: string
    description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttribute> {
    @ApiProperty({ example: 1, description: 'Unique key' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ApiProperty({ example: 'ADMIN', description: "user's role" })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    value: string

    @ApiProperty({
        example: 'Administrator',
        description: "role's description",
    })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
