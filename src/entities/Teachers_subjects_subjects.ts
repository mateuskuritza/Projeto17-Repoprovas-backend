import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("teachers_subjects_subjects")
export default class Teachers_subjects_subjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectId: number;

    @Column()
    teacherId: number;
}