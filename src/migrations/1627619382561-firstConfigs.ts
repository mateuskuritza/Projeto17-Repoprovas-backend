import {MigrationInterface, QueryRunner} from "typeorm";

export class firstConfigs1627619382561 implements MigrationInterface {
    name = 'firstConfigs1627619382561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "courseId" integer NOT NULL, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "periods" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "periodId" integer NOT NULL, "courseId" integer NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "categoryId" integer NOT NULL, "teacherId" integer NOT NULL, "subjectId" integer NOT NULL, "courseId" integer NOT NULL, "pdf" character varying NOT NULL, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_teachers_teachers" ("subjectsId" integer NOT NULL, "teachersId" integer NOT NULL, CONSTRAINT "PK_a4cd768e43d499d55f28ec992a4" PRIMARY KEY ("subjectsId", "teachersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5277f266ba42ba3daf25718e85" ON "subjects_teachers_teachers" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9be8d621d037fc355e4dbfea42" ON "subjects_teachers_teachers" ("teachersId") `);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_09b27ba7e53eea8c47eb5b576b2" FOREIGN KEY ("periodId") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_7f83dda887820244f729fe7e4c0" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_79f0ccaf8e323c2e8ea65ca5f54" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_910215de6563cf9f350eeb60a1d" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" ADD CONSTRAINT "FK_5277f266ba42ba3daf25718e850" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" ADD CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" DROP CONSTRAINT "FK_9be8d621d037fc355e4dbfea42e"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers_teachers" DROP CONSTRAINT "FK_5277f266ba42ba3daf25718e850"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_910215de6563cf9f350eeb60a1d"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_79f0ccaf8e323c2e8ea65ca5f54"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_7f83dda887820244f729fe7e4c0"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_a59dc4db9bd3d8407148a9b214b"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_09b27ba7e53eea8c47eb5b576b2"`);
        await queryRunner.query(`DROP INDEX "IDX_9be8d621d037fc355e4dbfea42"`);
        await queryRunner.query(`DROP INDEX "IDX_5277f266ba42ba3daf25718e85"`);
        await queryRunner.query(`DROP TABLE "subjects_teachers_teachers"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "tests"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "periods"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
        await queryRunner.query(`DROP TABLE "courses"`);
    }

}
