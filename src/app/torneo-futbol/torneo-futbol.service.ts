import { Injectable } from '@angular/core';
import { ClToreno_futbol } from './model/ClTorneo-futbol';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

// creamos Constantes que utilizaremos en el envio
const apiUrl = 'https://sumativa2.onrender.com/api/productos/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TorneoFutbolService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) {}

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('handleError Harrys', error); // log to console instead
      return of(result as T);
    };
  }

  // Método Agregar Torneo, y devuelve un observable del tipo Torneo
  // Debe ser un Observable si deses suscribir este método en otro lado
  addTorneo(torneo: ClToreno_futbol): Observable<ClToreno_futbol> {
    console.log('Res-api Enviando AddTorneo : ', torneo);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<ClToreno_futbol>(apiUrl, torneo, httpOptions).pipe(
      // Tubería
      // tap intersecta la respuesta si no hay error
      tap((torneo: ClToreno_futbol) => console.log('added torneo w/:', torneo)),
      // En caso de que ocurra Error
      catchError(this.handleError<ClToreno_futbol>('addTorneo'))
    );
  }

  // Obtenemos todos los Torneos
  getTorneos(): Observable<ClToreno_futbol[]> {
    console.log('getTorneos()');
    return this.http.get<ClToreno_futbol[]>(apiUrl).pipe(
      map((torneos) => torneos.filter((torneo) => torneo.codigo === '09-G10')),
      tap((torneos) => console.log('fetched torneos')),
      catchError(this.handleError('getTorneos', []))
    );
  }

  //  Obtener un Torneo
  getTorneo(id: number): Observable<ClToreno_futbol> {
    console.log('getTorneo ID:' + id);
    return this.http.get<ClToreno_futbol>(apiUrl + id).pipe(
      tap((_) => console.log(`fetched torneo id=${id}`)),
      catchError(this.handleError<ClToreno_futbol>(`getTorneo id=${id}`))
    );
  }

  deleteTorneo(id: number): Observable<ClToreno_futbol> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<Producto>(url, httpOptions).pipe(
    return this.http
      .delete<ClToreno_futbol>(apiUrl + id, httpOptions)
      .pipe(
        tap((_) => console.log('deleted torneo id=${id}')),
        catchError(this.handleError<ClToreno_futbol>('deleteTorneo'))
      );
  }

  updateTorneo(
    id: number,
    torneo: ClToreno_futbol
  ): Observable<ClToreno_futbol> {
    return this.http
      .put<ClToreno_futbol>(apiUrl + id, torneo, httpOptions)
      .pipe(
        tap((_) => console.log('updated torneo id=${id}')),
        catchError(this.handleError<any>('updateTorneo'))
      );
  }
}
