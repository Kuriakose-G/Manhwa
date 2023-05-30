import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyManhwa } from 'src/models/myManhwa';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allManhwas:MyManhwa[]=[];
  searchKey:string='';

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllManhwas()
  }
  getAllManhwas(){
    this.api.getAllManhwas().subscribe((result:any)=>{
      console.log(result);
    this.allManhwas=result
    })
  }
  search(event:any){
    this.searchKey=event.target.value
    console.log(event.target.value);
  }
  deleteManhwa(manhwaId:any){
    this.api.deleteManhwa(manhwaId).subscribe((data:any)=>{
      alert('Deleted')
      this.getAllManhwas()
    })
  }
}
