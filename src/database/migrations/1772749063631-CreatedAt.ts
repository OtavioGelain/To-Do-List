import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedAt1772749063631 implements MigrationInterface {
    name = 'CreatedAt1772749063631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "created_at" DROP DEFAULT`);
    }

}
