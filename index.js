// //============================ Various For Loop for Array =================== //
// For loop for Array
var myf = ['gg','hh','hfg','hfh','ggf','ygfgd'];
//console.log(myf[myf.length -1]); /** this provides te last element **/ 
for (var i = 0; i < myf.length; i++) {
    //console.log(myf[i]);    
}

//For in loop for Array
for(let elements in myf){
    //console.log(elements); 
}

// For of loop for Array
for (let elements of myf) {
    //console.log(elements);
}
           
/****  difference of For in and For of loop is that -
 foor in loop gives us the index number of that particular array,
 on the contrary , foor of gives us the value/elements of that array.****/

// ForEach loop using traditional function for Array
myf.forEach(function(element,index,array){
    //console.log(element + " index : " + index + " " + array);
});

// forEach loop using fat arrow function
myf.forEach((element,index,array) =>{
   //console.log(element +" "+ index +" "+ "[" + array + "]"); 
});

/**** forEach loop calls each function invidually in the array. For each loop can get
 both the elements/value and the index number spontineously. ****/

// ======================== Searching and Filter in Array ====================== //
// filter in search array
var numbers = [1,2,3,4,5,6,7,9]; // given array
numbers.filter((item,index,array)=>{
    //console.log(item +"  "+index+"  "+array);
/**** filter method can give us all the elements,index number and array. filter method returns all the matching items of an array ****/
});

//find in search array
var isEven = numbers => numbers % 1 == 0 //condition or predicate
//console.log(numbers.find(isEven));
/** find returns only the first matching item of a given predicate ***/
// console.log(numbers.find(isEven)); /** if it doesnt match the condition it shows undefined */

//findIndex in search array
var isLessThanZero = numbers => numbers < 0 ; // condition or predicate
var isGreterThanZero = numbers => numbers === 0 ; // condition or predicate
//console.log(numbers.findIndex(isEven));
/** findIndex return onlu first matchng index number of a given predicate . and if the condition doesnt match then it return -1*/
//console.log(numbers.findIndex(isLessThanZero));

//indexof -
//console.log(numbers.indexOf(6));

/** indexof returns the index number of a given item of that array.and if the condition doesnt match then it return -1 ***/

// lastindexof
//console.log(numbers.lastIndexOf(4));

// includes -
//console.log(numbers.includes(10)); /** includes takes an item of an array and returns true if at least one item matches, in reverse returns false */
// every -
//console.log(numbers.every(isEven));
/** evey returns true only when all the item matches of given condition */

// some -
//console.log(numbers.some(isGreterThanZero));
/** some returns true when at least one matches with that given condition */

//sorting in array
var sorting = [1,8,10,20,3,2];
//console.log(sorting.sort()); 
/** this type of sorting problem as by default sort method sorts the array in the ascending
order. here "10" considered as string thats why the output is not actual sorting **/
//to fix this problem we use comapare function to sort()

// assending
sorting.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0
});

sorting.sort((a,b) => a - b);
//console.log(sorting);
 
/** compare function takes the index number and find true value
using callback function thats how it fixes problem.  ***/

/** if theres decending order we need to change the logic */
sorting.sort((a,b) => {
    if (a > b) return -1;
    if (a < b) return  1;
    return 0;
});

sorting.sort((a,b) => b - a );
//console.log(sorting);

//sorting for strings
var pets = ['cat' , 'Dog', 'Snake', 'human' , 'Ant','zebra'];
//console.log(pets.sort());

//sorting for mixed strings
/** FOR MIXED CASE String need to use function to covert all elements to same case */
pets.sort(function(a,b){
    var x = a.toUpperCase(),
        y = b.toUpperCase();

        return x == y ? 0 : x > y ? 1 : -1;
});
//console.log(pets);

// Sorting of object
//for salary
var employees = [
    { name : 'Rajiv', salary : 10000, joiningDate: "01-06-2022"},
    { name : 'Dristy', salary : 12000, joiningDate: "01-05-2022"},
    { name : 'Pakhi', salary : 20000, joiningDate: "01-01-2022"},
]

employees.sort((x,y) => {
    return x.salary - y.salary;
})
//console.log(employees);
//for case sensitive name
employees.sort((x,y) => {
    var a = x.name.toUpperCase(),
        b = y.name.toUpperCase() ;
        return a == b ? 0 : a > b ? 1 : -1;
})
//console.log(employees);
//for Date sorting
employees.sort((x,y) => {
    var date1 = new Date(x.joiningDate),
        date2 = new Date(y.joiningDate);
        return date1 - date2 ;
});
//console.log(employees);

// =================================== CRUD Mehod performance ==========================//
//push method in array
const animals =['dog','wolf','horse'];
animals.push('elephant','chicken','cow');
//console.log(animals.length);
/**** push method add new elemnet or multiple elements in array at the end
 also it returns new length of array *****/

// unshift method in array
animals.unshift('cat');
//console.log(animals);
/**** unshift method add new elemnet or multiple elements in array at the begining
 also it returns new length of array *****/

//pop method in array
animals.pop('cow');
//console.log(animals);
// console.log(animals.pop('cow'));
// console.log(animals.length);
/**** pop method remove only last elemnet  in array from ending
 also it changes length of array *****/

//shift method in array
animals.shift();
//console.log(animals);
/**** shift method remove only 1st  elemnet  in array from begining
 also it changes length of array *****/

// splice method in array 
const months = ['jan','feb','mar','apr'];
const newMonthAdd = months.splice(months.length , 0 , "dec");/** here we add an elements in the last index. */
// console.log(months); 
// console.log(newMonthAdd);
 /** splice method mostly used for deleting. so if we going to 
see what it returns then it will show empty array cz here we do not delete anyting 
from this array. Splice returns the deleting array */

months.splice(1,1,'FEB'); // this is limited data
//console.log(months);
//if there are dynamic index of array then update data 
const indexofmonth = months.indexOf('apr');
if(indexofmonth != -1){
    const updateMonth = months.splice(indexofmonth,1,'April');
    //console.log(months);
    //console.log(updateMonth);
}else {
    //console.log(months);
    //console.log("no data found");
}
//if there are dynamicindex of array then deleting data
const deleteindex = months.indexOf('dec');
if (deleteindex != -1) {
    const deleteMonth = months.splice(deleteindex,0,"Laboiny");
    //console.log(months);
    //console.log(deleteMonth);
    
} else {
    //console.log("no dsata found");
    
}

// Map method starts


let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * 3;
// }

//console.log(arr); 

let maparr = arr.map(function(element,index){
//     //return (element * 3 );
 })
//console.log(maparr);

let mapSqrt =[25,36,49];
//console.log(mapSqrt);  // shows currentelemnt

let findSqrt = mapSqrt.map((element)=>
{
    return Math.sqrt(element);
});
//console.log(findSqrt); // creating sqrtroot from existing element
/** map method is used for creating a new array from an existing array. */

let mapdouble = mapSqrt.map((currentElement)=>{
    //return currentElement * 2;
})
//console.log(mapdouble);

let reduceMethod = 
mapSqrt.map((currentElement) => currentElement*2).filter((currentElement)=> currentElement < 80).reduce((accumulator,currentElement) => {
    return accumulator += currentElement;
});
//console.log(reduceMethod );
/** by using reduce method we can easily accumulate of an array. */
const myArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];

//   console.log(myArr[3]);
//   console.log(myArr[3] [0]);
//   console.log(myArr[3] [0] [1]);
//   console.log(myArr [2][1]);
//   console.log(myArr [2] [1]);

// ============================== strings ===============================//

//slice
// let str = ['kiwi','apple','banana'];
// let sliceStr = str.slice(2);
// //console.log(sliceStr);
// let subStr = str.substr(0,4)

var string = "Edureka JavaScript";
var substring = string.substring(0); /** two parametr - startIndex and endIndex. it excludes endIndex.*/
//console.log(substring);
var substr = string.substr(8,9); /** two parameter- startIndex and length */
var slice = string.slice(1);
//console.log(slice);

// let java = "JavaScript";
// console.log(java.length);

let studentGrades = [10,40,80,100,73,95,88,92];
let uppergrade = studentGrades.filter((element) =>element > 45).sort((a,b)=>a-b).slice(1);
//console.log(uppergrade);

let x = studentGrades.filter((number)=> number >= 80).slice(0).sort((a,b)=>a-b);
//console.log(x);

//========================== Convert string to array ======================//
/** using split method we can convert a string into array */
var text = "a bc de fg";
//console.log(text.split(","));
//console.log(text.split("|"));
//console.log(text.split(" "));

//============================== Date and Time ============================//

let currdate = new Date().toLocaleString();
//console.log(currdate);
let date2 = new Date().toLocaleTimeString();
//console.log(date2);
let date3 = new Date().getFullYear();
//console.log(date3);
let date4 = new Date().getHours();
// console.log(date4);
// console.log(new Date().getMonth());
// console.log(new Date().getMinutes());
  
// console.log(new Date().getMonth()+1);
// console.log(new Date().getMilliseconds());

// let dt1 = new Date('2010');
// console.log(dt1);

function diff_hours()
{
    let dt1 = new Date(2010,1,1).getTime();
    //console.log(dt1);
    let dt2 = new Date(2020,1,1).getTime();
    // let dt2 = new Date('2020');
    //console.log(dt1);
    var diff = dt2 - dt1 ;
    //var d = diff.getFullYear();
//diff /= (60 * 60);
//return Math. abs(Math. round(diff));
    return diff;
}

//console.log(diff_hours());

let yy = new Date(315532800000);
//console.log(yy.getHours());


// var dt3 = new Date(2010,5,10);
// console.log(dt3);
// var ss = dt3.getTime();
// console.log(ss);

(function() {
    setInterval(()=>{
        const timeLoop  = new Date().toLocaleTimeString();
        //console.log(timeLoop);
    },2000)
    
});

/** to covert a string to date object we need to use parse */

//================================= Math object ==========================//

// Math round
let num = 20.097077;

let roundFigure = Math.round(num); 
//console.log(round);
/** math round method return the nearest integer of given value */

// Math pow
let power = Math.pow(2,9);
//console.log(power); /** pow method returns the value of x to the power y */

// Math sqrt root
let squareRoot = Math.sqrt(433);
//console.log(squareRoot); /** it returns tthhe value of root */

//Math abs
let absoulateValue = Math.abs(-100);
//console.log( absoulateValue);
/** abs method return the absoulate positive value of a given value */

//Math ceil
let ceilValue = Math.ceil(4.02);
// console.log(ceilValue); 
/** ceil returns the upper value of a float value. no matter how the nearest value */

let floorValue = Math.floor(4.99)
// console.log(floorValue);
/** floor valuye returns the lower value and float value no matter how the nearest value */

// Math trunc
let trucValue = Math.trunc(-8.5346376341);
//console.log(trucValue);
/** trunc method returns only the integer value if the value is given in decimal or float. */

//=================================== DOM & BOM =======================================//

/** we can find the root element of any document by  writing "document.documentElement" */
/** we can easily find the document head or body using document.head or document.body */
/** we can find if the body has child or not by using "document.body.hasChildnodes" */

/** we can also find the document's body's child */
//document.body.firstElementChild.firstElementChild 

/** we can also change its style css */
//document.body.firstElementChild.firstElementChild.style.color = "red";

/**we can select the next element by querySelector  */
//= document.body.querySelector('.child-two');

/** we can select parent of  a document */
// document.body.parentNode

//============================= objects ===================================//
//object create in a 1st way
let biodata = {
    myName : "yyy",
    myAge : 28,
    getdata : function(){
        console.log(`my name is ${biodata.myName} and age is ${biodata.myAge}`);
    }
}
//biodata.getdata();

//object create in a 2nd way 
/** dont need to write function */

let biodata1 = {
    myName : "zzzz",
    myAge : 40,
    getdata (){
        console.log(`my name is ${biodata.myName} and age is ${biodata.myAge}`);
    }
}
//biodata1.getdata();

//object create in a 3rd way 
/** we can define multiple objects in a object */
let biodata2 = {
    myName : {
        x : "ttftedf",
        y : "hgfegr"
    },
    myAge : {
        d : 56,
        c :90,
        getdata(){
            console.log("happening");
        }
    }
}

//console.log(biodata2.myAge.getdata());

// function myname(){
//     console.log(this);
// }
// myname();

const obj = {
    myAge : 23,
    myName(){
        console.log(this);
    }
}

//console.log(obj.myAge);
const obj1 = {
    myName : 
    {
        realname : "ccccc",
        fakename : "yyyyy"
    },
    
        age : 45,
        getdata (){
            console.log(`real name is ${this.myName.realname}` );
        }
    
}
//obj1.getdata();

// ============================= Array destructuring ==========================//
/** destructuring means to divide */

let array1 = ['friends' ,'ggola','yyuett'];

let index1 = array1[0];
//console.log(index1);
let index2 = array1[1];
//console.log(index2);
let index3 = array1[2];
//console.log(index3);

/** upper code i quiet hasseling to console each one of this. to reduce this problem we use destructuring */

let [index4,index5,index6,index7="ggg"] = array1;
//console.log(index7); /** this is easy to use . we can add as much as data in array. */

// object destructuring 
const obj2 = {
    gg : "jrjfr",
    lname : "hvfhfd",
}

let {gg,lname} = obj2;
//console.log(lname);

let ff = "hdgdf";
let hh = "yuryre";

const obj3 = {ff,hh}
//console.log(obj3);

// ========================= Spread Oparator ==================================//
/** using spread oparator we can call an full araay into other array */
let colors = ['red','yellow','black'];
let colors2 = ['green','bright'];
let myColor = ['blue','pink',...colors,...colors2];
//console.log(myColor);
/** we can use spread opararto rin object also */
let person = { name : "dghf" , num:65};
let sperson = {...person};
//console.log(sperson);

let num1 = Number.MAX_SAFE_INTEGER;
//console.log(num1);
//"use strict";
r = 3.14;
//console.log(r);

//============================= Making small Calculation function =================//

/** Higher Order function - A function which takes another function as an arguments
    Callback Function - a function that is passed as an arguments to another funvction,
    to be callback at a later time
*/

const add = (a,b) => {
    return (a+b);
}

const subs = (a,b) => {
    return (a - b);
}

const multi = (a,b) => {
    return (a*b);
}

const calculation = (num1,num2,oparator) => {
    return oparator(num1,num2);
}

//console.log(calculation(2,2,add));
//console.log(calculation(2,5,subs));
//console.log(calculation(400,5,multi));

/** here calculation() is Higher order function and add(),subs(),multi() are callback function */

//========== lexical scoping=============================//
/** the child function have access to their parent function but the parent function
has no access to their child function */

    let a = "Hello frndzz!!"

    const first = () => {
        let b = "subha hoi gaye";

        const second = () => {
            let c = " Chai peloo...";
           // console.log(a+b+c);
        }
        second();
        //console.log(a+b);
    }

    //console.log(a);
    first();

    //=================== Synchoronous and Asynchoronus ====================//

    //Synchoronus

    const fun2 = () => {

        //console.log(`Function 2 is calling`);

    }
    const fun1 = () =>{
       //console.log(`Function 1 is called`);
        fun2();
       // console.log(`function 1 is calling`);
    }

    fun1();




/** asynchoronous */
    
    // const fun2 = () => {
    //     setTimeout(() => {

    //         console.log(`Function 2 is calling`);
    //     },3000);

    // }
    // const fun1 = () =>{
    //     console.log(`Function 1 is called`);
    //     fun2();
    //     console.log(`function 1 is calling`);
    // }        

    // fun1();                              

    // ============== Function Currying ================================= //

    /**functon currying is a function which's parameter 
    is itself a function and return their other other function */

   const sum = (num1) => (num2) =>(num3) => {
    //console.log(num1+num2+num3);
   }

//======================= JSON ======================================= //
 
/**  Json full format : JavaScript Object Notation */ 

var my_object = {key1 : "some text", key2 : true, key3 : 5};

/** if we want a Json object to string then use JSON.stringify : Json stringify trurns
a js object into Json-text and stores that json-text in a string */

var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string);
// console.log(typeof(object_as_string));

/** if we have a JSON string data and we want to convert into object then we will
use parse */

var object_as_string_into_object = JSON.parse(object_as_string);
//console.log(typeof(object_as_string_into_object));
//console.log(object_as_string_into_object);

// ======================== Convert string to number ======================// 

// using Unary Plus Operator
//********  var n = +str; ********************//
var n = +"400"
//console.log(typeof(n));

// the Number constructor
//*********** var y = Number(str) ******************/
var y = "200";
var y = Number("200")
//console.log(typeof(y));

// the parseFloat Function
//************** var b = parseFloat(str) ************/
var c = "100";
//console.log(typeof(c));
var c = parseFloat("100.1222");
//console.log(c);

// ===================== Append / Prepend ==========================// 

/** append()/appendChild() --- 
        means it appends a node or child as the last child of a node/parent */

/** prepend()/prependChild() --- 
        means it prepends a node or child as the first child of a node/parent */

const nx = [33,2,8];
// n.sort();
//console.log(1 +  "2" + "2");

//const isTrue = true == [];
//const isFalse = true == ![];

//console.log(isTrue );
//console.log( 018 - 015);

let array = [1, 2, 3];
array[6] = 9;
//console.log(array[5]);

myCount = [true, false, true, false, true].reduce(function(a, b) {
    return b ? a + 1 : a;
  });

//console.log(myCount + "hgfhdsgh");

function countTrue(arr) {
	let count = 0;
	
	for(let element of arr){
        
        if(element===true) {
            count++;
        } 
    } 
    return count;
}

//console.log(countTrue([true, false, true, false, true]));

// function arrayCount(arr) {
//     let count = 0;
//     for(let element of arr) if(element===true) count++;
//     return count;
// }

// console.log(arrayCount([false,false,true,false,true]))

function getFirstValue(arr) {
	let firstValue = arr[0];
    return firstValue;
}
//console.log(getFirstValue([1, 2, 3]))

function convert(minutes) {
    return 60*minutes;
}

//console.log(convert(6));

function toArray(obj) {
	var y = Object.entries(obj);
    return y;
}
let jj = toArray({a: 1, b: 2 });
//console.log(typeof(jj));

function calcAge(age) {
	let today = new Date();

    let year = today.getFullYear();

    let getAge = year - age
    return getAge;
}

//console.log(calcAge(1995));

function sortIt(arr) {
	let sorting = arr.sort((a,b) => a-b);
    return sorting;
}

//console.log(sortIt([[3], 4, [2], [5], 1, 6]));

function addition(num) {
	return num = num + 1;
}

//console.log(addition(1));

function nameString(name){
	var chhh = "Edabit" 
	var result = name + chhh;
  	return result;
}
console.log(new Array(5).toString());

var foo = {
    x:2,
    baz: {
        x:1,
        bar: function(){
            return this.x;
        }
    }
}
var go = foo.baz.bar;
console.log(go());
console.log(foo.baz.bar()); 

const isTrue = true == [];
const isFalse = true == ![];

console.log(isTrue + isFalse);

