import { Component, OnInit } from '@angular/core';
import { MyManhwa } from 'src/models/myManhwa';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit{

  allgenres:any=[];
  manhwa:MyManhwa={};

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.api.getAllGenres().subscribe((data:any)=>{
      this.allgenres=data;
      this.manhwa.genreId="Select a genre"
    })
  }

  addManhwa(){
    this.api.addManhwa(this.manhwa).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
