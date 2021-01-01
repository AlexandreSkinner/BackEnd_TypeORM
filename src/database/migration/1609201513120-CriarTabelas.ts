import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelas1609201513120 implements MigrationInterface {
    name = 'CriarTabelas1609201513120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `class` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, `duration` int NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_574dd394846fb85d495d0f77df` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");

        await queryRunner.query("CREATE TABLE `content` (`id` int NOT NULL AUTO_INCREMENT, `descript` varchar(255) NOT NULL, `linkContent` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");

        await queryRunner.query("CREATE TABLE `lesson` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        
        await queryRunner.query("CREATE TABLE `student` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `key` int NOT NULL, `created_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_At` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `student`");
        await queryRunner.query("DROP TABLE `lesson`");
        await queryRunner.query("DROP TABLE `content`");
        await queryRunner.query("DROP INDEX `IDX_574dd394846fb85d495d0f77df` ON `class`");
        await queryRunner.query("DROP TABLE `class`");
    }

}
