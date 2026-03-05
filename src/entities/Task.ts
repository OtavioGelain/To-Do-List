import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, CreateDateColumn } from "typeorm";
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

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @ManyToOne(() => User , (user) => user.task)
    user: User
}

