import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
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
}