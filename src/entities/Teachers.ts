import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Tests from "./Tests";

@Entity("teachers")
export default class Teachers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Tests, test => test.teacher)
    tests: Tests[];
}