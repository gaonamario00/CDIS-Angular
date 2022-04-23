import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Automovil } from '../models/models';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(
    private http: HttpClient,
    private msgService: MessagesService    
    ) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(environment.urlAutos).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=>{ 
        this.msgService.add('Productos obtenidos');
      })
    );
  }

  updateAutos(auto: Automovil){
    return this.http.put<any>(`${environment.urlAutos}/${auto._id}`,auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap(()=>{ 
        this.msgService.add('Se ha actualizado un registro');
       })
    );
  }

  deleteAuto(auto:Automovil){
    return this.http.delete<any>(`${environment.urlAutos}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(()=>{ 
        this.msgService.add('Se ha eliminado un registro');
      })
    );
  }

  addAutos(auto:Automovil){
    return this.http.post(environment.urlAutos,auto).pipe(
      catchError(this.handleError<any>('addAutos')),
      tap(()=>{ 
        this.msgService.add('Se ha agregado un registro');
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> =>{
      this.msgService.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }

}
