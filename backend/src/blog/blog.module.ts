import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users';
import { Post } from './post.model';
import { FilesModule } from '../files/files.module';

@Module({
  providers: [BlogService],
  controllers: [BlogController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class BlogModule {}
