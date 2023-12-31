import {Body, Post, Get, Param,Request} from '@nestjs/common/decorators/http';
import { Controller, UseGuards } from '@nestjs/common';
import { User } from '../model/user.model';
import { UserService } from 'src/service/user.service';
import { AdminGuard } from 'src/guard/auth.guard';

@Controller('user')

export class UserController{
    constructor(private userService: UserService){}
        @Post('/signup')
        async SignUp(@Body() user:User): Promise<User|any>{
            const getuser=await this.userService.CreateUser(user);
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
        @UseGuards(AdminGuard)
        FindAllUser():Promise<User[]>{
        return this.userService.FindAllUser();
        }

        @Post('/login')
        async LogIn(@Body() user:User,@Request() req): Promise<User|any>{
            const getuser= await this.userService.LogIn(user);
            if(getuser!=undefined)
            {
                req.res.cookie('name', getuser.name);
                req.res.cookie('post', getuser.post);
                return "Loggen In Successfully!";
            }
            else
            {
                return "Invalid Username or Password.";
            }
        }

    }
