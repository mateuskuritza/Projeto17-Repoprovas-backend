import {MigrationInterface, QueryRunner} from "typeorm";

export class manyToManyTeachersToSubjects21627597320456 implements MigrationInterface {
    name = 'manyToManyTeachersToSubjects21627597320456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" DROP CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" ADD CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" DROP CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" ADD CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
