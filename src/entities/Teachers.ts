import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import Courses from "./Courses";
import Tests from "./Tests";

@Entity("teachers")
export default class Teachers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    courseId: number;

    @OneToMany(() => Tests, test => test.teacher, { onDelete: "CASCADE" })
    tests: Tests[];

    @ManyToOne(() => Courses, course => course.teachers, { onDelete: "CASCADE" })
    course: Courses;
}