import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subjects from "./Subjects";
@Entity("periods")
export default class Periods {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Subjects, subjects => subjects.period, { onDelete: "CASCADE" })
    subjects: Subjects[];
}