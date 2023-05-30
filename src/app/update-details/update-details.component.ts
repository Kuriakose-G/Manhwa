import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyGenres } from 'src/models/myGenres';
import { MyManhwa } from 'src/models/myManhwa';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit{

  manhwaId:string='';
  manhwa:MyManhwa={};
  genres:MyGenres[]=[] as MyGenres[];

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log('Received data',data);
      this.manhwaId=data.Id;
      // console.log(this.manhwaId);
      


      this.api.viewManhwas(this.manhwaId).subscribe((data:any)=>{
        this.manhwa=data;

        this.api.getAllGenres().subscribe((data:any)=>{
          this.genres=data;
        })
      })
    })
  }
  updateManhwa(){
    this.api.updateManhwa(this.manhwaId, this.manhwa).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
