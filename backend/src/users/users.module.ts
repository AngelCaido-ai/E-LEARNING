import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role, RolesService, UserRoles } from '../roles';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesService,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
