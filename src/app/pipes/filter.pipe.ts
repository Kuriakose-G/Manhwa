import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allManhwas:any[],searchKey:string,propName:string): any[] {
    const result:any=[];

    if(!allManhwas||searchKey==''||propName==''){
      return allManhwas;
    }
    allManhwas.forEach((manhwa:any)=>{
      if(manhwa[propName].trim().toLowerCase().includes(searchKey.toLocaleLowerCase().trim())){
        result.push(manhwa)
      }
    })
    return result;
  }
}
