import {MigrationInterface, QueryRunner} from "typeorm";

export class cascadeDelete1627619702228 implements MigrationInterface {
    name = 'cascadeDelete1627619702228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_09b27ba7e53eea8c47eb5b576b2"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_09b27ba7e53eea8c47eb5b576b2" FOREIGN KEY ("periodId") REFERENCES "periods"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_09b27ba7e53eea8c47eb5b576b2"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_09b27ba7e53eea8c47eb5b576b2" FOREIGN KEY ("periodId") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
