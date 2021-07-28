import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("courses")
export default class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}