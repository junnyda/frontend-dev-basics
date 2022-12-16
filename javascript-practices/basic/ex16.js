/**
 * 함수: function 타입의 객체
 * 
 */

// 함수를 생성하는 방법1: 함수 리터럴
console.log("== 함수 생성 방법1 =============");
function f1(a, b) {
    return a + b;
}

console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

// 함수를 생성하는 방법2: 함수 리터럴(recommend)
console.log("== 함수 생성 방법 2(추천용) =============");
var f2 = function (a, b) {
    return a + b;
}

console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

//함수를 생성하는 방법3: new 연산자와 함께 Function 내장 객체(생성자함수)를 사용하는 방법
console.log("== 함수 생성 방법 3 =============");
var f3 = new Function("a", "b", "return a + b;")
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

// 합수를 생선하는 방법4: 익명(anonymous) 함수 
setTimeout(function() {
    console.log('time ouit!');
}, 1000);


// 익명(anonymous) 함수의 또 다른 예: 한번 만(즉시) 실행하는 함수
console.log("== 익명 함수의 또다른 예: =============");
var s = (function(a, b){
    var m = 10;
    return a/m + b/m;
})(10, 20);
console.log(s);

// 가변 파라미터

// 1. 자바스크립트의 함수는 기본적으로 가변 파라미터를 지원
//    파라미터는 고정 되어 있지 않다.
//    에러가 나지 않음
var f4 = function(a, b, c) {
    console.log(a, b, c);
}
f4(10, 20, 30, 40, 50 ,60);

// 2. 예
console.log("== 가변 파라미터 함수 =============");
var sum = function() {
    var s = 0;

    console.log(arguments instanceof Array. arguments.length);
    
    // for(let i = 0; i < arguments.length; i++){
    //     s += arguments[i];
    //     }

    // Error
    // arugments의 __proto__는 object prototype에 chain이 되어 있기 때문에 오류
    // arguments.forEach(function(e){
    //     s += e;
    // });


    return s;
}

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5, 6));





var myObject = {
    v: "jun",
    f: function() {
        console.log(this.v);
    },
    f1: function(greeting) {
        console.log(gretting + " " + this.v);
    }
}

var yourObject = {
    v: "seung"
}

myObject.f.bind(yourObject)
myObject.f1.call(yourObject, "hello");