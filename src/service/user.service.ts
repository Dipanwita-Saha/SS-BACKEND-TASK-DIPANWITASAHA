import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from '../model/user.model';

@Injectable()
export class UserService{

    constructor(@InjectModel('User') private userModel: Model<User>){}

    CreateMovie(user:User): Promise<User>{
    const newuser = new this.userModel(user);
    return newuser.save();
    }
}