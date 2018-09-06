import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { User } from '.././_models/user';
 
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
 
    getAll() {
        return this.http.get<User[]>('localhost:8080/users');
    }
 
    getById(id: number) {
        return this.http.get('localhost:8080/users/' + id);
    }
 
    register(user: User) {
        return this.http.post('localhost:8080/users/register', user);
    }
 
    update(user: User) {
        return this.http.put('localhost:8080/users/' + user.id, user);
    }
 
    delete(id: number) {
        return this.http.delete('localhost:8080/users/' + id);
    }
}