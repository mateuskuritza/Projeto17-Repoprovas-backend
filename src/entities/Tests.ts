import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Categories from "./Categories";
import Courses from "./Courses";
import Teachers from "./Teachers";
import Subjects from "./Subjects";
@Entity("tests")
export default class Tests {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    categoryId: number;

    @Column()
    teacherId: number;

    @Column()
    subjectId: number;

    @Column()
    courseId: number;

    @Column()
    pdf: string;

    @ManyToOne(() => Categories, category => category.tests, { onDelete: 'CASCADE' })
    category: Categories;

    @ManyToOne(() => Teachers, teacher => teacher.tests, { onDelete: 'CASCADE' })
    teacher: Teachers;

    @ManyToOne(() => Subjects, subject => subject.tests, { onDelete: 'CASCADE' })
    subject: Subjects;
}