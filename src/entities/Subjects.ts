import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import Courses from "./Courses";
import Periods from "./Periods";
import Teachers from "./Teachers";
import Tests from "./Tests";
@Entity("subjects")
export default class Subjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    periodId: number;

    @Column()
    courseId: number;

    @OneToMany(() => Tests, test => test.subject, { onDelete: "CASCADE" })
    tests: Tests[];

    @ManyToOne(() => Periods, period => period.subjects, { onDelete: "CASCADE" })
    period: Periods;

    @ManyToOne(() => Courses, course => course.teachers, { onDelete: "CASCADE" })
    course: Courses;
}