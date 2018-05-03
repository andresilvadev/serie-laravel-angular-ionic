import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/albums')
      .subscribe(data => {
        this.albums = data;
        console.log(this.albums);
      });
  }

}
