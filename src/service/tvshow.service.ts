import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Show} from '../model/tvshow.model';

@Injectable()
export class ShowService{

    constructor(@InjectModel('Show') private showModel: Model<Show>){}

    CreateShow(show:Show): Promise<Show>{
    const newshow = new this.showModel(show);
    return newshow.save();
    }

    FindAllShow():Promise<Show[]>{
        return this.showModel.find().exec();
        }

    FindShow(id:string):Promise<Show>{
        return this.showModel.findById(id).exec();
        }
}