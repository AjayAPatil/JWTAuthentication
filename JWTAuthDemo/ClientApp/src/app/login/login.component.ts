import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../common/global.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    userName: string = "";
    password: string = "";
    constructor(
        private httpClient: HttpClient,
        private global: GlobalService,
        private router: Router) {

    }
    login() {
        var data = {
            UserName: this.userName,
            Password: this.password
        }
        var httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.httpClient.post<any>("/api/auth/login", data, httpOptions).subscribe(res => {
            if (res) {
                this.global.username = this.userName;
                this.global.token = res.token;
                this.router.navigate(['/']);
            }
        })
    }
}