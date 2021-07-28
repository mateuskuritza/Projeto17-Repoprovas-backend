import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("subjects_teachers")
export default class Subjects_teachers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectId: number;

    @Column()
    teacherId: number;
}