import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Movie} from '../model/movie.model';

@Injectable()
export class MovieService{

    constructor(@InjectModel('Movie') private movieModel: Model<Movie>){}

    CreateMovie(movie:Movie): Promise<Movie>{
    const newmovie = new this.movieModel(movie);
    return newmovie.save();
    }
    
    FindAllMovie():Promise<Movie[]>{
        return this.movieModel.find().exec();
        }

    FindMovie(id:string):Promise<Movie>{
        return this.movieModel.findById(id).exec();
        }

}