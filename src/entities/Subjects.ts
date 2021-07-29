import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
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

    @OneToMany(() => Tests, test => test.subject)
    tests: Tests[];

    @ManyToOne(() => Periods, period => period.subjects)
    period: Periods;

    @ManyToMany(() => Teachers)
    @JoinTable()
    teachers: Teachers[];
}