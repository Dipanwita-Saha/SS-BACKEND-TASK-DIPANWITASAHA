import {Body, Post, Get, Param} from '@nestjs/common/decorators/http';
import { Controller } from '@nestjs/common';
import { User } from '../model/user.model';
import { UserService } from 'src/service/user.service';

@Controller('user')

export class UserController{
    constructor(private userService: UserService){}
        @Post('/signup')
        async SignUp(@Body() user:User): Promise<User|any>{
            const getuser= this.userService.CreateUser(user);
            if(getuser!=undefined)
            {
                return getuser;
            }
            else
            {
                return "User already exists.";
            }
        }

        @Post('/createadmin')
        async CreateAdmin(@Body() user:User): Promise<User|any>{
            const getuser= this.userService.CreateAdmin(user);
            if(getuser!=undefined)
            {
                return getuser;
            }
            else
            {
                return "User already exists.";
            }
        }

        @Get('/alluser')
        FindAllUser():Promise<User[]>{
        return this.userService.FindAllUser();
        }

        @Post('/login')
        async LogIn(@Body() user:User): Promise<User|any>{
            const getuser= this.userService.LogIn(user);
            if(getuser!=undefined)
            {
                return getuser;
            }
            else
            {
                return "Invalid Username or Password.";
            }
        }

    }
