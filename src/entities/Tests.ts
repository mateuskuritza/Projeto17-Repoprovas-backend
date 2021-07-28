import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}