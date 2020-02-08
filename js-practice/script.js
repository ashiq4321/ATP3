"use strict"
var x=10;
var array=['Ashiq','cse',123];
document.write(x);
document.write(array[0]);
function sum(a=0,c=0){
   return b();
}

var b= function(){
    return 1+2;
}
var x=sum(0,5);
document.write(x);

var person ={}
person.age=20;
person.name=' Ashiq';


var person={
    name:' again',
    age:20,
    getName: function(){
        return this.name;
    },
    cascadeGetname: function(){
        return this.getName();
    }
}
document.write(person.cascadeGetname());

function student(name="", age=0, dept=""){
	this.name=name;
	this.age = age;
	this.dept = dept;
}
 var s1=new student();
 s1.name=' student1';
 var s2=new student(' student2');
 document.write(s1.name);

 document.write(s2.name);

 function teacher(){
     return {
         name :'',
         id : 0,
         getId: function(){
             return {
                 sec: 'A',
                 getSec: function(){
                     return this.sec;
                 }
             }
         }
     }
 }

 var t1= new teacher();
 t1.name=" al-amin";
 t1.id="123";
 t1
 document.write(t1.getId().getSec());