'use strict';

var _rxjs = require('rxjs');

var dataSource = _rxjs.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

var observer = dataSource.subscribe(console.log);