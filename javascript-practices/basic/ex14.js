/**
 * URL 다루기
 */

var url ='http://www.mysite.com/user?name=준&no=10&jun@gmail.com';

// 1. escape
var url2 = escape(url);
console.log(url2);

// 2. encodeURI: URL중 파라미터만 encoding, 사용(o)
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent: 값만 Encoding해야 하는 경우, 사용(o)
// 잘못 사용한 경우
var url4 = encodeURIComponent(url);
console.log(url4);


// 4.
// 만들어야 할 URL
// http://www.mysite.com/user?name=준&no=10&jun@gmail.com
var url = ' http://www.mysite.com/user';
var formData ={
    no: 10,
    name: '준',
    email: 'jun@gmail.com'
};

var toQueryString = function(o) {
    for(prop in o) {
        prop + "=" + [o.prop];
    
    }
}

var url5 = url + "?" + toQueryString(formData);
console.log(url5);


//jQurey
// jQueryy.ajax({
//     url:"",
//     type: "post",
//     data: toQueryString(formData)
// });