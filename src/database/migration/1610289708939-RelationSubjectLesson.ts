import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationSubjectLesson1610289708939 implements MigrationInterface {
    name = 'RelationSubjectLesson1610289708939'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_0b349f6b8ca7f05eed39ffb956` ON `content`");
        await queryRunner.query("ALTER TABLE `lesson` ADD `subjectId` int NULL");
        await queryRunner.query("ALTER TABLE `lesson` ADD CONSTRAINT `FK_cd8274b3e5c420f57a14e9b6950` FOREIGN KEY (`subjectId`) REFERENCES `subject`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `lesson` DROP FOREIGN KEY `FK_cd8274b3e5c420f57a14e9b6950`");
        await queryRunner.query("ALTER TABLE `lesson` DROP COLUMN `subjectId`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_0b349f6b8ca7f05eed39ffb956` ON `content` (`lessonId`)");
    }

}
