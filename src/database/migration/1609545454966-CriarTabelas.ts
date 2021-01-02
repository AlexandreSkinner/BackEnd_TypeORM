import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelas1609545454966 implements MigrationInterface {
    name = 'CriarTabelas1609545454966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `content` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `linkContent` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");

        await queryRunner.query("CREATE TABLE `lesson` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");

        await queryRunner.query("CREATE TABLE `student` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `key` int NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        
        await queryRunner.query("CREATE TABLE `subject` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, `duration` int NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_d011c391e37d9a5e63e8b04c97` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_d011c391e37d9a5e63e8b04c97` ON `subject`");
        await queryRunner.query("DROP TABLE `subject`");
        await queryRunner.query("DROP TABLE `student`");
        await queryRunner.query("DROP TABLE `lesson`");
        await queryRunner.query("DROP TABLE `content`");
    }

}
