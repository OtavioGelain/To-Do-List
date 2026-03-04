import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Task } from "./Task";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => Task, (task) => task.user)
    task: Task[]
}