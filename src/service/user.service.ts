import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from '../model/user.model';

@Injectable()
export class UserService{

    constructor(@InjectModel('User') private userModel: Model<User>){}

    async CreateUser(user:User): Promise<User| undefined>{
        const name=user.name;
        const finduser=await this.userModel.findOne({name:name}).exec();
        if(finduser)
        {
            return undefined;
        }
        else{
            user.post="USER";
            const salt = await bcrypt.genSalt();
            const hashpass =await bcrypt.hash(user.password,salt);
            user.password=hashpass;
            const newuser = new this.userModel(user);
            return newuser.save();
        }
    }

    async CreateAdmin(user:User): Promise<User| undefined>{
        const name=user.name;
        const finduser=await this.userModel.findOne({name:name}).exec();
        if(finduser)
        {
            return undefined;
        }
        else{
            user.post="ADMIN";
            const salt = await bcrypt.genSalt();
            const hashpass =await bcrypt.hash(user.password,salt);
            user.password=hashpass;
            const newuser = new this.userModel(user);
            return newuser.save();
        }
    }

     
    FindAllUser():Promise<User[]>{
        return this.userModel.find().exec();
        }

    FindUser(id:string):Promise<User>{
        return this.userModel.findById(id).exec();
        }

    async LogIn(user:User):Promise<User| undefined>{
        const name=user.name;
        const finduser=await this.userModel.findOne({name:name}).exec();
        if(finduser)
        {
            const isMatch= await bcrypt.compare(user.password, finduser.password);
            if(isMatch)
            {
             return finduser;
            }
            else{
             return undefined
            }
        }
        else{
          return undefined;
        }
    }
}