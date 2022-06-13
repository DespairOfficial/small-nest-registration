import {
    Model,
    Table,
    Column,
    DataType,
    BelongsTo,
    ForeignKey,
} from 'sequelize-typescript'
import { User } from 'src/users/users.model'
interface PostCreationAttributes {
    title: string
    content: string
    userId: number
    image: string
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
    })
    userId: number

    @Column({
        type: DataType.STRING,

        allowNull: false,
    })
    title: string

    @Column({
        type: DataType.STRING,

        allowNull: false,
    })
    content: string

    @Column({ type: DataType.STRING })
    image: string

    @BelongsTo(() => User)
    author: User
}
