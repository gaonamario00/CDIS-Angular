import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Automovil } from '../models/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }

  getAutos(): Observable<Automovil[]>{
    return this.http.get<Automovil[]>(environment.urlAutos);
  }

}
