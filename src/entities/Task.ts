import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    complete: boolean;

    @Column()
    created_at: Date;

    @ManyToOne(() => User , (user) => user.task)
    user: User
}

