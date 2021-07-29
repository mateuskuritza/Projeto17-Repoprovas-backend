import {MigrationInterface, QueryRunner} from "typeorm";

export class manyToManyTeachersToSubjects1627597165443 implements MigrationInterface {
    name = 'manyToManyTeachersToSubjects1627597165443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects_teachers_teachers" ("subjectsId" integer NOT NULL, "teachersId" integer NOT NULL, CONSTRAINT "PK_a4cd768e43d499d55f28ec992a4" PRIMARY KEY ("subjectsId", "teachersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5277f266ba42ba3daf25718e85" ON "subjects_teachers_teachers" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9be8d621d037fc355e4dbfea42" ON "subjects_teachers_teachers" ("teachersId") `);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" ADD CONSTRAINT "FK_5277f266ba42ba3daf25718e850" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" ADD CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" DROP CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" DROP CONSTRAINT "FK_5277f266ba42ba3daf25718e850"`);
        await queryRunner.query(`DROP INDEX "IDX_9be8d621d037fc355e4dbfea42"`);
        await queryRunner.query(`DROP INDEX "IDX_5277f266ba42ba3daf25718e85"`);
        await queryRunner.query(`DROP TABLE "subjects_teachers_teachers"`);
    }

}
