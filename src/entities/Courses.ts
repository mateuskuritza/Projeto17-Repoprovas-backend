import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subjects from "./Subjects";
import Teachers from "./Teachers";
@Entity("courses")
export default class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Teachers, teacher => teacher.course, { onDelete: "CASCADE" })
    teachers: Teachers[];

    @OneToMany(() => Subjects, subject => subject.course, { onDelete: "CASCADE" })
    subjects: Subjects[];
}