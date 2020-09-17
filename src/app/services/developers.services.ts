import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http' 
import { Developer } from '../models/developer.model';
const urlContexto= 'https://developersavalithapi.herokuapp.com/developers';
// const urlContexto= 'http://localhost:3000/developers';

@Injectable({
    providedIn: 'root'
})

export class DevelopersServices{
    
    constructor(private http:HttpClient ){}

    

    getDevelopers(){
        return this.http.get(urlContexto);
    }

    delete(develop:Developer){
        return this.http.delete(urlContexto+'/'+develop.id);
    }

    agregarDeveloper(develop){
        return this.http.post(urlContexto,develop);
    }

    updateDeveloper(develop){
        return this.http.put(urlContexto,develop);
    }

}