
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:'myNews'
})


export class InfoPipe implements PipeTransform {


    transform(value: any) {
        let about:string = value+'';

        let formattedabout:string = '';

        formattedabout = about.slice(0,10)+'...';
                                   
                                          
        console.log('pipe method '+formattedabout);
        return formattedabout;

    }


}
