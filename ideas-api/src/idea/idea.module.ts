import { CommentService } from './../comment/comment.service';
import { CommentEntity } from './../comment/comment.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './../user/user.entity';
import { IdeaEntity } from './idea.entity';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea.service';
import { IdeaResolver } from './idea.resolver';

import { AppGateway } from '../app.gateway';
@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity, CommentEntity])],
  controllers: [IdeaController],
  providers: [IdeaService, IdeaResolver, CommentService, AppGateway],
})
export class IdeaModule {}
