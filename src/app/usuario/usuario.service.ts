import { Injectable } from '@angular/core';
import { Clusuario } from './model/ClUsuario';

// Importamos  las librerías necesarias
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';


// creamos Constantes que utilizaremos en el envio
const apiUrl = 'https://sumativa2.onrender.com/api/productos/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // Injectamos HttpClient, para poder consular una página
  constructor(private http: HttpClient, private storage: Storage) {}

  // Controla y enviará un mensaje a consola para todos los errores
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('error usuarios', error); // log to console instead
      return of(result as T);
    };
  }

  // Método Agregar Torneo, y devuelve un observable del tipo Torneo
  // Debe ser un Observable si deses suscribir este método en otro lado
  addUsuario(usuario: Clusuario): Observable<Clusuario> {
    console.log('Res-api Enviando AddUsuario : ', usuario);
    // Ojo No lo ejecuta lo declara
    // El Pipe lo intercepta
    return this.http.post<Clusuario>(apiUrl, usuario, httpOptions).pipe(
      // Tubería
      // tap intersecta la respuesta si no hay error
      tap((usuario: Clusuario) => console.log('added usuario w/:', usuario)),
      // En caso de que ocurra Error
      catchError(this.handleError<Clusuario>('addUsuario'))
    );
  }

  saveUser(user: Clusuario) {
    const users: Clusuario[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  

  getUser(username: string) {
    const users: Clusuario[] = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((user: Clusuario) => user.username === username) || false;
  }
  
  checkUserExists(username: string) { 
    const users: Clusuario[] = JSON.parse(localStorage.getItem('users') || '[]');
    return !!users.find((user: Clusuario) => user.username === username);
  }
  
  
  getAllUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
  
  checkUserLogged() {
    const user = JSON.parse(localStorage.getItem('user') || '[]');
    if (user.length == 0){
      return false;
    }
    return true;
  }

  saveLoggedInUser(user: Clusuario) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  deleteLoggedUser() {
    localStorage.removeItem('user');
  }

  getUserLogged() {
    const user: Clusuario = JSON.parse(localStorage.getItem('user') || '[]');
    return user;
  }
  
  

  
  
  // Obtenemos todos los Torneos
  getUsuarios(): Observable<Clusuario[]> {
    console.log('getUsuarios()');
    return this.http.get<Clusuario[]>(apiUrl).pipe(
      //map((usuarios) => usuarios.filter((usuario) => usuario.codigo === '09-G10-U')),
      tap((usuarios) => console.log('fetched usuarios')),
      catchError(this.handleError('getUsuario', []))
    );
  }

  //  Obtener un usuario
  getUsuario(id: String): Observable<Clusuario> {
    //const url = '${apiUrl}/${id}';
    //return this.http.get<Producto>(url).pipe(
    console.log('getUsuario ID:' + id);
    return this.http.get<Clusuario>(apiUrl + id).pipe(
      tap((_) => console.log('fetched usuario id=${id}')),
      catchError(this.handleError<Clusuario>('getUsuario id=${id}'))
    );
  }

  deleteUsuario(id: number): Observable<Clusuario> {
    //const url = '${apiUrl}/${id}';
    //return this.http.delete<Producto>(url, httpOptions).pipe(
    return this.http.delete<Clusuario>(apiUrl + id, httpOptions).pipe(
      tap((_) => console.log('deleted usuario id=${id}')),
      catchError(this.handleError<Clusuario>('deleteUsuario'))
    );
  }

  updateUsuario(id: number, usuario: Clusuario): Observable<Clusuario> {
    return this.http.put<Clusuario>(apiUrl + id, usuario, httpOptions).pipe(
      tap((_) => console.log('updated usuario id=${id}')),
      catchError(this.handleError<any>('updateUsuario'))
    );
  }
}
