import { AuthGuard } from 'src/shared/auth.guard';
import { UserDTO } from './user.dto';
import { CommentService } from './../comment/comment.service';
import { UserService } from './user.service';
import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
    private commentService: CommentService,
  ) {}

  @Query()
  users(@Args('page') page: number) {
    return this.userService.showAll(page);
  }

  @Query()
  user(@Args('username') username: string) {
    return this.userService.read(username);
  }

  @Query()
  @UseGuards(new AuthGuard())
  whoami(@Context('user') user) {
    const { username } = user;
    return this.userService.read(username);
  }

  @Mutation()
  login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    const user: UserDTO = { username, password };
    return this.userService.login(user);
  }

  @Mutation()
  //   register(@Args() { username, password }) {}
  register(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    const user: UserDTO = { username, password };
    return this.userService.register(user);
  }

  @ResolveProperty()
  comments(@Parent() user) {
    const { id } = user;
    return this.commentService.showByUser(id);
  }
}
