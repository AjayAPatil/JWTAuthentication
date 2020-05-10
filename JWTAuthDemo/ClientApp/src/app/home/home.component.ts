import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../common/global.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    authData = "";
    anonymousData = "";
    constructor(
        private global: GlobalService,
        private httpClient: HttpClient,
        private router: Router) { }
    ngOnInit() {
        if (this.global.username) { }
        else {
            this.router.navigate(['Login']);
        }
    }
    getauth() {
        var httpOptions = {
            headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.global.token })
        };
        //JWT
        this.httpClient.get<any>("/api/test/authorized",httpOptions).subscribe(res => {
            if (res) {
                this.authData = res.message;
            }
        })
    }
    getanon() {
        this.httpClient.get<any>("/api/test/anonymous").subscribe(res => {
            if (res) {
                this.anonymousData = res.message;
            }
        })
    }
}