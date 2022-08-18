import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestPipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}
