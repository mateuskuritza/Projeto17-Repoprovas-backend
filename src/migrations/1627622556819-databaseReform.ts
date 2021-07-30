import {MigrationInterface, QueryRunner} from "typeorm";

export class databaseReform1627622556819 implements MigrationInterface {
    name = 'databaseReform1627622556819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_79f0ccaf8e323c2e8ea65ca5f54"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_be7152766987a7bcdcac0401510" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD CONSTRAINT "FK_76d26ab0ed82554b3057427e3c3" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers" DROP CONSTRAINT "FK_76d26ab0ed82554b3057427e3c3"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_be7152766987a7bcdcac0401510"`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_79f0ccaf8e323c2e8ea65ca5f54" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
