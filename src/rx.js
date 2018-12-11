import { Observable, from, interval, of, range, merge, timer } from 'rxjs';
import { map, take, mapTo, takeLast, skip, takeUntil, first} from 'rxjs/operators';

const dataSource$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

const observer1 = dataSource$.subscribe(console.log);
const observer2 = dataSource$.subscribe(console.log);

const dataSource2$ = from([3, 4, 5, 6]).pipe(map(v => v * 2));
const o1 = dataSource2$.subscribe(console.log);
const o2 = dataSource2$.subscribe(console.log);

console.log(dataSource2$);
console.log(o1);
console.log(interval(1000).pipe(take(3)));
interval(1000).pipe(take(3)).subscribe(console.log)

of('a', 'b').subscribe(console.log);

from("helloworld").subscribe(console.log);

range(100,5).subscribe(console.log);
range(100,5).pipe(mapTo("hi")).subscribe(console.log);

range(200, 5).pipe(takeLast(2)).subscribe(console.log);

range(300, 5).pipe(skip(2)).subscribe(console.log);

merge(range(250, 5).pipe(take(2)), interval(1000).pipe(take(2))).subscribe(console.log);

timer(10000).subscribe(console.log);

const promise = (msg) => new Promise(resolve => {
    console.log(msg);
    setTimeout(() => {
      resolve('success');
    }, 5000)
    
});

const promise$ = from(promise('hi dottie!'));
console.log(promise$);
promise$.subscribe(console.log);