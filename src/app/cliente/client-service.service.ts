import { Injectable } from '@angular/core';
import { Clcliente } from './model/Clcliente';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// creamos Constantes que utilizaremos en el envio
const apiUrl = "http://localhost:3000/usuarios";
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient) { }

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("handleError Harrys", error); // log to console instead
      return of(result as T);
    };
  }

  // Método Agregar producto, y devuelve un observable del tipo Producto
  // Debe ser un Observable si deses suscribir este método en otro lado
  addCliente(cliente: Clcliente): Observable<Clcliente> {
    console.log("Res-api Enviando AddClient : ", cliente);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<Clcliente>(apiUrl, cliente, httpOptions)
      .pipe(  // Tubería
        // tap intersecta la respuesta si no hay error
        tap((cliente: Clcliente) => console.log('added client w/:', cliente)),
        // En caso de que ocurra Error
        catchError(this.handleError<Clcliente>('addCliente'))
      );
  }

  // Obtenemos todos los Productos
  getClientes(): Observable<Clcliente[]> {
    console.log("getClients ()");
    return this.http.get<Clcliente[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched clientes')),
        catchError(this.handleError('getClientes', []))
      );
  }


  //  Obtener un Producto
  getCliente(id: String): Observable<Clcliente> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Cliente>(url).pipe(
    console.log("getCliente ID:" + id);
    return this.http.get<Clcliente>(apiUrl + "/" + id)
      .pipe(
        tap(_ => console.log('fetched cliente id=${id}')),
        catchError(this.handleError<Clcliente>('getCliente id=${id}'))
      );
  }

  deleteCliente(id: number): Observable<Clcliente> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<Cliente>(url, httpOptions).pipe(
    return this.http.delete<Clcliente>(apiUrl + "/" + id, httpOptions)
      .pipe(
        tap(_ => console.log('deleted cliente id=${id}')),
        catchError(this.handleError<Clcliente>('deleteCliente'))
      );
  }

  updateCliente(id: number, cliente: Clcliente): Observable<Clcliente> {
    return this.http.put<Clcliente>(apiUrl + "/" + id, cliente, httpOptions)
      .pipe(
        tap(_ => console.log('updated cliente id=${id}')),
        catchError(this.handleError<any>('updateCliente'))
      );
  }


}
