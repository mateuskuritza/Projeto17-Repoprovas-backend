import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Periods from "./Periods";
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
}