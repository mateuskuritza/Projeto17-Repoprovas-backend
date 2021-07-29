import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Tests from "./Tests";
@Entity("courses")
export default class Courses {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, test => test.course)
    tests: Tests[];
}