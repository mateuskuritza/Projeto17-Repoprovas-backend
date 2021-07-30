import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subjects from "./Subjects";
import Tests from "./Tests";
@Entity("courses")
export default class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, test => test.course, { onDelete: "CASCADE" })
    tests: Tests[];
}