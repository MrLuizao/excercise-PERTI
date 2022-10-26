import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbar'
})
export class SearchbarPipe implements PipeTransform {

  transform(arreglo: any, texto: string, columna: string): any[] {

    // console.log('PIPE',arreglo);

    if(texto === ''){
      return arreglo;
    }

    return arreglo.filter( (item) =>{
      return item[columna].toLowerCase().includes( texto.toLowerCase() )
    })
    
  }

}
