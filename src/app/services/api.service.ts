import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyManhwa } from 'src/models/myManhwa';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl='http://localhost:3000/manhwas'

  constructor(private http:HttpClient) { }

  // function to get all manhwa
  getAllManhwas():Observable <MyManhwa>{
    return this.http.get(this.baseUrl)
  }

  // api call to get particular manhwa
  viewManhwas(manhwaId:string){
    return this.http.get(`${this.baseUrl}/${manhwaId}`)
  }

  // api call to get genre name
getGenreName(genreId:string){
  return this.http.get('http://localhost:3000/genres/'+genreId)
}

// api call to fetch genre details
getAllGenres(){
  return this.http.get('http://localhost:3000/genres')
}

// api call for adding new contact to server
addManhwa(manhwaBody:any){
  return this.http.post(this.baseUrl,manhwaBody)
}

// api call for deleting a contact in the server
deleteManhwa(manhwaId:any){
  return this.http.delete(`${this.baseUrl}/${manhwaId}`)
}

// api call to update a manhwa
updateManhwa(manhwaId:any,manhwaBody:any){
  return this.http.put(`${this.baseUrl}/${manhwaId}`,manhwaBody)
}

}

