import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-manhwa',
  templateUrl: './view-manhwa.component.html',
  styleUrls: ['./view-manhwa.component.css']
})
export class ViewManhwaComponent implements OnInit {

  manhwaId:string='';
  manhwa:any=[];
  genreId:string='';
  genreName:string='';

  constructor (private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      this.manhwaId=data.manhwaId;

      this.api.viewManhwas(this.manhwaId).subscribe((data:any)=>{
        console.log(data);
        
        this.manhwa=data;
        this.genreId=data.genreId

        this.api.getGenreName(this.genreId).subscribe((data:any)=>{
          this.genreName=data.name
        })
      })
    })
  }

}
